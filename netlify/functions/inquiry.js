// netlify/functions/inquiry.js
// Handles evaluation intake form submissions from /intake (Contact.tsx)
// Writes to Notion Engagement Inquiries DB + identifies contact in Customer.io

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const NOTION_DB = process.env.NOTION_INQUIRY_DB_ID || process.env.NOTION_INQUIRIES_DB;

const CUSTOMERIO_SITE_ID   = process.env.CUSTOMERIO_SITE_ID;
const CUSTOMERIO_TRACK_KEY = process.env.CUSTOMERIO_TRACK_API_KEY;

// ── Helpers ──────────────────────────────────────────────────────────────────

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };
}

// Derive a Customer.io segment from deployment_type and use_case fields
// (Contact.tsx uses these instead of the old inquiry form's system_type)
function deriveSegment(deployment_type, use_case) {
  const dt = (deployment_type || '').toLowerCase();
  const uc = (use_case || '').toLowerCase();

  if (dt.includes('clinical') || uc.includes('mental health') || uc.includes('healthcare')) {
    return 'mental-health-ai';
  }
  if (dt.includes('customer support') || uc.includes('customer support')) {
    return 'customer-support-ai';
  }
  if (dt.includes('hr') || dt.includes('workforce') || uc.includes('enterprise copilot')) {
    return 'enterprise-ai';
  }
  return 'human-facing-ai'; // safe default for all other types
}

// Map scenario_volume → Notion Engagement Type (legacy DB schema)
function mapScenarioVolumeToEngagementType(v) {
  if (!v) return 'Unsure';
  if (v.startsWith('25')) return 'Snapshot';
  if (v.startsWith('50') || v.startsWith('79') || v.startsWith('100')) return 'Audit';
  return 'Unsure';
}

// Push contact + event to Customer.io Track API
async function pushToCustomerIO(data) {
  if (!CUSTOMERIO_SITE_ID || !CUSTOMERIO_TRACK_KEY) {
    console.warn('Customer.io env vars not set — skipping CIO push');
    return;
  }

  const authHeader = 'Basic ' + Buffer.from(
    `${CUSTOMERIO_SITE_ID}:${CUSTOMERIO_TRACK_KEY}`
  ).toString('base64');

  const email      = (data.work_email || data.email || '').toLowerCase().trim();
  const customerId = encodeURIComponent(email);
  const segment    = deriveSegment(data.deployment_type, data.use_case);
  const nameParts  = (data.name || '').split(' ');

  // 1. Identify / upsert the person
  const identifyRes = await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}`,
    {
      method: 'PUT',
      headers: { Authorization: authHeader, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        first_name:       nameParts[0] || data.name,
        last_name:        nameParts.slice(1).join(' ') || '',
        company:          data.company,
        role:             data.role_title || data.role || '',
        segment,
        system_type:      data.deployment_type || '',
        use_case:         data.use_case || '',
        scenario_volume:  data.scenario_volume || '',
        engagement_model: data.engagement_model || '',
        industry:         data.industry || '',
        region:           data.region || '',
        company_size:     data.company_size || '',
        lead_source:      'inbound_inquiry',
        created_at:       Math.floor(Date.now() / 1000),
      }),
    }
  );

  if (!identifyRes.ok) {
    console.error('CIO identify failed:', identifyRes.status, await identifyRes.text());
  }

  // 2. Track the inquiry_submitted event (triggers inbound campaign sequence)
  const eventRes = await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}/events`,
    {
      method: 'POST',
      headers: { Authorization: authHeader, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'inquiry_submitted',
        data: {
          segment,
          use_case:         data.use_case || '',
          deployment_type:  data.deployment_type || '',
          scenario_volume:  data.scenario_volume || '',
          engagement_model: data.engagement_model || '',
          company:          data.company,
        },
      }),
    }
  );

  if (!eventRes.ok) {
    console.error('CIO event failed:', eventRes.status, await eventRes.text());
  }
}

// Write the submission to the Notion Engagement Inquiries database
// Maps Contact.tsx field names → legacy Notion property names (no DB schema change needed)
async function pushToNotion(data) {
  if (!NOTION_DB) {
    console.warn('NOTION_INQUIRY_DB_ID / NOTION_INQUIRIES_DB not set — skipping Notion push');
    return null;
  }

  const email = data.work_email || data.email || '';

  // Build a rich details string from the key free-text and context fields
  const detailsText = [
    data.system_and_concerns || data.details || '',
    data.use_case            ? `\n\nUse case: ${data.use_case}`              : '',
    data.deployment_type     ? `\nDeployment type: ${data.deployment_type}`  : '',
    data.scenario_volume     ? `\nScenario volume: ${data.scenario_volume}`  : '',
    data.engagement_model    ? `\nEngagement model: ${data.engagement_model}`: '',
    data.industry            ? `\nIndustry: ${data.industry}`                : '',
    data.region              ? `\nRegion: ${data.region}`                    : '',
    data.company_size        ? `\nCompany size: ${data.company_size}`        : '',
    data.deadline            ? `\nDeadline: ${data.deadline}`                : '',
    `\nSegment: ${deriveSegment(data.deployment_type, data.use_case)}`,
  ].join('').trim();

  const response = await notion.pages.create({
    parent: { database_id: NOTION_DB },
    properties: {
      // ── Stable Notion DB property names ──
      'Name': {
        title: [{ text: { content: data.name } }],
      },
      'Email': {
        email,
      },
      'Organization': {
        rich_text: [{ text: { content: data.company || '' } }],
      },
      'Role': {
        rich_text: [{ text: { content: data.role_title || data.role || '' } }],
      },
      'Product Description': {
        rich_text: [{ text: { content: `${data.deployment_type || ''} — ${data.company || ''}` } }],
      },
      'Product Stage': {
        // New form doesn't capture deployment_stage; default to Pre-launch
        select: { name: 'Pre-launch' },
      },
      'Engagement Type': {
        select: { name: mapScenarioVolumeToEngagementType(data.scenario_volume) },
      },
      'Source': {
        select: { name: 'Website Form' },
      },
      'Details': {
        rich_text: [{ text: { content: detailsText.slice(0, 2000) } }],
      },
      'Status': {
        select: { name: 'New' },
      },
      'Submitted': {
        date: { start: new Date().toISOString() },
      },
    },
  });

  return response.id;
}

// ── Handler ───────────────────────────────────────────────────────────────────

exports.handler = async (event) => {
  const headers = corsHeaders();

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  // Required fields — name, email (work_email), company
  const email = data.work_email || data.email || '';
  if (!data.name || !String(data.name).trim()) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required field: name' }) };
  }
  if (!email.trim()) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required field: work_email' }) };
  }
  if (!data.company || !String(data.company).trim()) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required field: company' }) };
  }

  // Run Notion + CIO writes concurrently; neither failure breaks the form submission
  const [notionResult] = await Promise.allSettled([
    pushToNotion(data),
    pushToCustomerIO(data),
  ]);

  if (notionResult.status === 'rejected') {
    console.error('Notion write failed:', notionResult.reason);
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      message: 'Inquiry submitted successfully',
      id: notionResult.value || null,
    }),
  };
};
