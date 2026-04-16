exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const allowed = ["source", "name", "facility", "email", "phone", "bed_count"];
  const sanitized = {};
  for (const key of allowed) {
    if (payload[key] !== undefined) {
      sanitized[key] = typeof payload[key] === "string" ? payload[key].trim() : payload[key];
    }
  }

  if (!sanitized.name || !sanitized.facility || !sanitized.email) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields: name, facility, email" }) };
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/consultation_requests`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
      },
      body: JSON.stringify(sanitized),
    });

    if (!res.ok) {
      const text = await res.text();
      return { statusCode: res.status, body: JSON.stringify({ error: "Upstream error", detail: text }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: "Failed to reach database" }) };
  }
};
