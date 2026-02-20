/**
 * ikwe-proxy.js — Netlify Function
 *
 * Server-side proxy for Anthropic API calls from the /consult page.
 * Keeps the API key out of the browser (stored as ANTHROPIC_API_KEY env var
 * in Netlify → Site settings → Environment variables).
 *
 * Called by ikwe-consult-preview.html as:
 *   POST /.netlify/functions/ikwe-proxy
 *   Body: { model, max_tokens, system, messages }
 */

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key not configured" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  // Allowlist only the fields we need — never forward arbitrary payloads
  const payload = {
    model:      body.model      || "claude-sonnet-4-5-20251101",
    max_tokens: Math.min(body.max_tokens || 800, 1500),
    system:     body.system,
    messages:   body.messages,
  };

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type":         "application/json",
        "x-api-key":            apiKey,
        "anthropic-version":    "2023-06-01",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type":                "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Upstream error", detail: err.message }),
    };
  }
};
