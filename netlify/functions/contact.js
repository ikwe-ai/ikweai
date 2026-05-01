// netlify/functions/contact.js
// Lightweight contact form handler for the /contact page.
//
// Required fields: name, email
// Optional fields:  company, message, opt_in (boolean)
//
// On submission:
//   1. Identifies / upserts the contact in Customer.io CDP (segment + lead source)
//   2. Sends a transactional reply email to the lead via Customer.io App API
//   3. Sends a new-lead notification email to stephanie@ikwe.ai
//   4. Creates a record in the Notion Engagement Inquiries DB
//
// Required env vars:
//   CUSTOMERIO_CDP_KEY      — CDP / Pipelines Write Key (for identify + track)
//   CUSTOMERIO_APP_API_KEY  — App API Bearer token (for transactional email send)
//   NOTION_API_KEY          — Notion integration token
//   NOTION_INQUIRY_DB_ID    — Notion DB for leads (or NOTION_INQUIRIES_DB)

const NOTION_DB       = process.env.NOTION_INQUIRY_DB_ID || process.env.NOTION_INQUIRIES_DB;
const CIO_CDP_KEY     = process.env.CUSTOMERIO_CDP_KEY   || process.env.CUSTOMERIO_SITE_ID;
const CIO_APP_KEY     = process.env.CUSTOMERIO_APP_API_KEY;
const NOTION_API_KEY  = process.env.NOTION_API_KEY;
const NOTIFY_EMAIL    = 'stephanie@ikwe.ai';

// ── Helpers ───────────────────────────────────────────────────────────────────

function cors() {
  return {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };
}

// ── 1. Customer.io CDP: identify + track event ────────────────────────────────

async function pushToCustomerIOCDP({ name, email, company, message, opt_in }) {
  if (!CIO_CDP_KEY) {
    console.warn('CUSTOMERIO_CDP_KEY not set — skipping CDP push');
    return;
  }

  const auth      = 'Basic ' + Buffer.from(`${CIO_CDP_KEY}:`).toString('base64');
  const parts     = (name || '').split(' ');
  const firstName = parts[0] || name;
  const lastName  = parts.slice(1).join(' ') || '';
  const userId    = email.toLowerCase().trim();

  const [idRes, evRes] = await Promise.all([
    // Identify / upsert the person
    fetch('https://cdp.customer.io/v1/identify', {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        traits: {
          email: userId,
          first_name:  firstName,
          last_name:   lastName,
          company:     company || '',
          opt_in:      Boolean(opt_in),
          lead_source: 'contact_form',
          segment:     'human-facing-ai',
        },
      }),
    }),
    // Track contact_form_submitted event
    fetch('https://cdp.customer.io/v1/track', {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        event: 'contact_form_submitted',
        properties: {
          company:     company || '',
          opt_in:      Boolean(opt_in),
          has_message: Boolean(message && message.trim()),
        },
      }),
    }),
  ]);

  if (!idRes.ok) console.error('CIO identify failed:', idRes.status, await idRes.text());
  if (!evRes.ok) console.error('CIO track failed:',   evRes.status, await evRes.text());
}

// ── 2. Customer.io App API: send transactional emails ─────────────────────────

function buildReplyEmail({ name, company, message }) {
  const firstName = (name || '').split(' ')[0] || name;
  const companyLine = company ? `<p style="margin:0 0 6px">Company: ${company}</p>` : '';
  const messageLine = message
    ? `<p style="margin:24px 0 6px;color:#5C5A78;font-size:13px;text-transform:uppercase;letter-spacing:.08em">Your message</p>
       <p style="margin:0 0 24px;padding:16px;background:#1D1F35;border-left:3px solid #F7A192;border-radius:3px;font-style:italic;color:#A8A4C0">${message}</p>`
    : '';

  return {
    subject: `Got your message — here's how to reach us | Ikwe.ai`,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#191A2E;font-family:Inter,'Helvetica Neue',Arial,sans-serif;font-weight:300;color:#F5F0E8;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#191A2E;padding:40px 20px;">
  <tr><td>
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#1D1F35;border:1px solid rgba(247,161,146,0.15);border-radius:6px;overflow:hidden;">

      <!-- Header -->
      <tr>
        <td style="padding:28px 36px 20px;border-bottom:1px solid rgba(247,161,146,0.10);">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:28px;height:28px;border-radius:50%;background:conic-gradient(#22243C 0deg 90deg,#F7A192 90deg 180deg,#B894F6 180deg 270deg,#F6D993 270deg 360deg);border:1.5px solid rgba(247,161,146,0.35);vertical-align:middle;">
              </td>
              <td style="padding-left:10px;font-family:Georgia,serif;font-size:15px;color:#F5F0E8;vertical-align:middle;letter-spacing:.03em;">ikwe.ai</td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px 36px 36px;">
          <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:22px;line-height:1.3;font-weight:normal;color:#F5F0E8;">
            Hi ${firstName},
          </p>
          <p style="margin:0 0 20px;line-height:1.7;color:#A8A4C0;font-size:15px;">
            Thanks for reaching out — I'll follow up personally within one business day.
            In the meantime, here's how to reach me directly:
          </p>

          <!-- Contact card -->
          <table cellpadding="0" cellspacing="0" style="width:100%;background:#22243C;border:1px solid rgba(247,161,146,0.12);border-radius:4px;margin-bottom:24px;">
            <tr>
              <td style="padding:20px 24px;">
                <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:16px;color:#F5F0E8;">Stephanie Stranko</p>
                <p style="margin:0 0 16px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#5C5A78;">Founder &amp; CEO, Ikwe.ai</p>
                <p style="margin:0 0 6px;font-size:14px;color:#A8A4C0;">
                  <a href="mailto:stephanie@ikwe.ai" style="color:#F7A192;text-decoration:none;">stephanie@ikwe.ai</a>
                </p>
                <p style="margin:0 0 6px;font-size:14px;color:#A8A4C0;">
                  <a href="https://ikwe.ai" style="color:#F7A192;text-decoration:none;">ikwe.ai</a>
                  &nbsp;·&nbsp;
                  <a href="https://www.linkedin.com/in/stephaniestranko/" style="color:#F7A192;text-decoration:none;">LinkedIn</a>
                  &nbsp;·&nbsp;
                  <a href="https://x.com/stephstranko" style="color:#F7A192;text-decoration:none;">X: @stephstranko</a>
                </p>
              </td>
            </tr>
          </table>

          ${messageLine}

          <p style="margin:0 0 8px;font-size:13px;color:#5C5A78;text-transform:uppercase;letter-spacing:.08em;">What happens next</p>
          <p style="margin:0 0 24px;line-height:1.7;color:#A8A4C0;font-size:15px;">
            I'll review your message and reach out to set up a short scoping call.
            If you'd like to get ahead of it, feel free to reply to this email directly.
          </p>

          <p style="margin:32px 0 0;font-size:14px;line-height:1.6;color:#5C5A78;border-top:1px solid rgba(247,161,146,0.08);padding-top:24px;">
            Ikwe.ai &nbsp;·&nbsp; Visible Healing Inc. &nbsp;·&nbsp; Des Moines, Iowa<br/>
            <a href="https://ikwe.ai/privacy.html" style="color:#5C5A78;">Privacy</a>
            &nbsp;·&nbsp;
            <a href="https://ikwe.ai/contact" style="color:#5C5A78;">Manage preferences</a>
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`,
    plain_text: `Hi ${firstName},

Thanks for reaching out — I'll follow up personally within one business day.

STEPHANIE STRANKO
Founder & CEO, Ikwe.ai
stephanie@ikwe.ai
https://ikwe.ai
LinkedIn: https://www.linkedin.com/in/stephaniestranko/
X: @stephstranko

What happens next:
I'll review your message and reach out to set up a short scoping call. Feel free to reply to this email directly.

—
Ikwe.ai · Visible Healing Inc. · Des Moines, Iowa`,
  };
}

function buildNotifyEmail({ name, email, company, message, opt_in }) {
  const companyLine = company ? `Company: ${company}` : 'Company: —';
  const messageLine = message || '(no message)';
  return {
    subject: `New contact form submission from ${name}`,
    html: `<p><strong>New lead from ikwe.ai/contact</strong></p>
<p><strong>Name:</strong> ${name}<br/>
<strong>Email:</strong> <a href="mailto:${email}">${email}</a><br/>
<strong>${companyLine}</strong><br/>
<strong>Opt-in:</strong> ${opt_in ? 'Yes' : 'No'}</p>
<p><strong>Message:</strong><br/>${messageLine}</p>`,
    plain_text: `New lead from ikwe.ai/contact\n\nName: ${name}\nEmail: ${email}\n${companyLine}\nOpt-in: ${opt_in ? 'Yes' : 'No'}\n\nMessage:\n${messageLine}`,
  };
}

async function sendViaCustomerIOAppAPI({ to, from_name, from_email, reply_to, subject, html, plain_text }) {
  if (!CIO_APP_KEY) {
    console.warn('CUSTOMERIO_APP_API_KEY not set — skipping transactional email send');
    return;
  }

  const res = await fetch('https://api.customer.io/v1/send/email', {
    method: 'POST',
    headers: {
      Authorization:  `Bearer ${CIO_APP_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      from:      `${from_name} <${from_email}>`,
      reply_to:  reply_to || from_email,
      subject,
      body:      html,
      plaintext: plain_text,
    }),
  });

  if (!res.ok) {
    console.error('CIO transactional send failed:', res.status, await res.text());
  }
}

// ── 3. Notion: create lead record ─────────────────────────────────────────────

async function pushToNotion({ name, email, company, message, opt_in }) {
  if (!NOTION_DB || !NOTION_API_KEY) {
    console.warn('Notion env vars not set — skipping Notion push');
    return null;
  }

  const detailsText = [
    message ? message.trim() : '',
    opt_in  ? '\n\n[Opted in to research & updates]' : '',
  ].join('').trim();

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization:    `Bearer ${NOTION_API_KEY}`,
      'Content-Type':   'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DB },
      properties: {
        'Name':         { title:     [{ text: { content: name } }] },
        'Email':        { email:     email.toLowerCase().trim() },
        'Organization': { rich_text: [{ text: { content: company || '' } }] },
        'Source':       { select:    { name: 'Website Form' } },
        'Details':      { rich_text: [{ text: { content: detailsText.slice(0, 2000) } }] },
        'Status':       { select:    { name: 'New' } },
        'Submitted':    { date:      { start: new Date().toISOString() } },
      },
    }),
  });

  if (!res.ok) {
    console.error('Notion create failed:', res.status, await res.text());
    return null;
  }
  const page = await res.json();
  return page.id;
}

// ── Handler ───────────────────────────────────────────────────────────────────

export const handler = async (event) => {
  const headers = cors();

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
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const name  = String(data.name  || '').trim();
  const email = String(data.email || '').trim();

  if (!name)  return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing: name' }) };
  if (!email) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing: email' }) };

  const payload = {
    name,
    email,
    company: String(data.company || '').trim(),
    message: String(data.message || '').trim(),
    opt_in:  Boolean(data.opt_in),
  };

  const replyEmail  = buildReplyEmail(payload);
  const notifyEmail = buildNotifyEmail(payload);

  // Fire all four actions concurrently; none blocks the 200 response
  const [notionResult] = await Promise.allSettled([
    pushToNotion(payload),
    pushToCustomerIOCDP(payload),
    // Auto-reply to the lead
    sendViaCustomerIOAppAPI({
      to:          payload.email,
      from_name:   'Stephanie Stranko',
      from_email:  'stephanie@ikwe.ai',
      reply_to:    'stephanie@ikwe.ai',
      subject:     replyEmail.subject,
      html:        replyEmail.html,
      plain_text:  replyEmail.plain_text,
    }),
    // Notification to Stephanie
    sendViaCustomerIOAppAPI({
      to:          NOTIFY_EMAIL,
      from_name:   'Ikwe Contact Form',
      from_email:  'noreply@ikwe.ai',
      reply_to:    payload.email,
      subject:     notifyEmail.subject,
      html:        notifyEmail.html,
      plain_text:  notifyEmail.plain_text,
    }),
  ]);

  if (notionResult.status === 'rejected') {
    console.error('Notion write failed:', notionResult.reason);
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ success: true, id: notionResult.value || null }),
  };
};
