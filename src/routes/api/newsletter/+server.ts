import { json, error } from '@sveltejs/kit';
import { z } from 'zod';
import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from '$env/static/private';
import type { RequestHandler } from './$types';

const schema = z.object({
  email: z.string().email(),
  name:  z.string().max(80).optional()
});

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json().catch(() => null);
  if (!body) throw error(400, 'Invalid JSON');

  const parsed = schema.safeParse(body);
  if (!parsed.success) throw error(400, parsed.error.issues[0].message);

  const { email, name } = parsed.data;

  // Check env vars are present (allow graceful fallback in dev)
  if (!RESEND_API_KEY || RESEND_API_KEY.startsWith('re_PLACEHOLDER')) {
    console.warn('[newsletter] No Resend API key — skipping email send in dev');
    return json({ success: true, message: 'Subscribed (dev mode)' });
  }

  const resend = new Resend(RESEND_API_KEY);

  // Add to audience
  if (RESEND_AUDIENCE_ID) {
    await resend.contacts.create({
      email,
      firstName: name?.split(' ')[0] ?? '',
      lastName:  name?.split(' ').slice(1).join(' ') ?? '',
      audienceId: RESEND_AUDIENCE_ID,
    });
  }

  // Send welcome email
  await resend.emails.send({
    from:    'INDU Foundation <hello@indu-foundation.pages.dev>',
    to:      [email],
    subject: 'Welcome to the INDU Alpha — You\'re in.',
    html: `
      <!DOCTYPE html>
      <html>
      <body style="background:#0a0f1e;color:#f1f5f9;font-family:Inter,sans-serif;padding:40px;max-width:600px;margin:auto">
        <div style="text-align:center;margin-bottom:40px">
          <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17" stroke="#f59e0b" stroke-width="1.5"/>
            <path d="M10 10 L10 26 M10 18 L18 10 L18 26 M18 10 L26 26 M26 10 L26 26"
                  stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h1 style="color:#f59e0b;font-size:1.5rem;margin-top:16px">INDU Foundation</h1>
        </div>
        <h2 style="color:#f1f5f9">You're on the Alpha list, ${name ?? 'developer'}.</h2>
        <p style="color:#94a3b8;line-height:1.7">
          You've joined the developers who believe the stack has been broken for too long.
          Write with Python's ease. Scale with Erlang's fault-tolerance. Execute with C's speed.
        </p>
        <p style="color:#94a3b8;line-height:1.7">
          When the INDU compiler alpha ships, you'll be among the first to know.
          Until then — explore the language spec, join our Discord, or read the RFC.
        </p>
        <div style="margin:32px 0;display:flex;gap:12px;flex-wrap:wrap">
          <a href="https://indu-foundation.pages.dev/docs" style="background:#f59e0b;color:#0a0f1e;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600">Read the Docs</a>
          <a href="https://indu-foundation.pages.dev/playground" style="background:transparent;color:#f59e0b;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;border:1px solid #f59e0b">Try the Playground</a>
        </div>
        <hr style="border:1px solid rgba(255,255,255,0.08);margin:32px 0" />
        <p style="color:#64748b;font-size:0.8rem">
          You're receiving this because you signed up at indu-foundation.pages.dev.
          <a href="https://indu-foundation.pages.dev/unsubscribe?email=${encodeURIComponent(email)}" style="color:#94a3b8">Unsubscribe</a>
        </p>
      </body>
      </html>
    `
  });

  return json({ success: true, message: 'Welcome to the INDU alpha.' });
};
