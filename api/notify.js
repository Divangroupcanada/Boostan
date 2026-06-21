// /api/notify.js
// Boostan Group — launch notify endpoint.
// Mirrors the Divan site's /api/contact pattern: same-origin POST, JSON in/out,
// hidden honeypot field, returns { ok: true } on success or { error } on failure.
//
// Runtime: Vercel Serverless Function (Node 18+). No package.json needed — CommonJS + global fetch.
// Required env var:  RESEND_API_KEY   (https://resend.com → API Keys)
// Optional env vars: NOTIFY_TO        (where signups are emailed — defaults below)
//                    NOTIFY_FROM      (sender — defaults to Resend's shared sender)

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vercel auto-parses JSON bodies; fall back to manual parse just in case.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  body = body || {};

  const email = String(body.email || '').trim();
  const website = String(body.website || '').trim(); // honeypot — humans leave this empty

  // Bot trap: if the hidden field is filled, silently accept and drop it.
  if (website) return res.status(200).json({ ok: true });

  // Validate email.
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) return res.status(400).json({ error: 'Please enter a valid email address.' });

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured yet.' });
  }

  const NOTIFY_TO = process.env.NOTIFY_TO || 'info@boostangroup.com';
  // Until boostangroup.com is verified in Resend, keep the shared sender below.
  // After verifying the domain, switch to e.g. 'Boostan Group <notify@boostangroup.com>'.
  const NOTIFY_FROM = process.env.NOTIFY_FROM || 'Boostan Group <onboarding@resend.dev>';

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        reply_to: email,
        subject: `🌱 New Boostan launch signup — ${email}`,
        html: `
          <div style="font-family:Georgia,'Times New Roman',serif;max-width:480px;margin:0 auto;padding:28px;background:#F4EEE2;border-radius:14px;color:#1C1A15">
            <div style="font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:#9C2A2A">Boostan Group</div>
            <p style="font-size:15px;margin:14px 0 6px">New signup for the launch list:</p>
            <p style="font-size:20px;font-weight:700;color:#155A40;margin:0">${email}</p>
            <hr style="border:none;border-top:1px solid #D69A2D;opacity:.4;margin:20px 0">
            <p style="font-size:12px;color:#6b6b6b;margin:0">Sent automatically from boostangroup.com · Reply to this email to reach them directly.</p>
          </div>`,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('Resend error:', r.status, detail);
      return res.status(502).json({ error: 'Could not save your email right now. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Notify handler error:', err);
    return res.status(500).json({ error: 'Connection issue. Please try again in a moment.' });
  }
};
