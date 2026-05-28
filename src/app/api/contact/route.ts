import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, company, interest, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#060e1e;color:#e2eaf6;padding:32px;border-radius:12px;border:1px solid rgba(0,188,212,0.2)">
      <div style="margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.08)">
        <h2 style="margin:0;color:#00bcd4;font-size:22px">New Contact Form Submission</h2>
        <p style="margin:4px 0 0;color:#4a627e;font-size:13px">Exyra Technologies Website</p>
      </div>
      <table style="width:100%;border-collapse:collapse">
        ${[
          ["Name",     name],
          ["Email",    email],
          ["Phone",    phone || "—"],
          ["Company",  company || "—"],
          ["Interest", interest || "—"],
        ].map(([label, val]) => `
          <tr>
            <td style="padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:6px;color:#4a627e;font-size:12px;width:100px">${label}</td>
            <td style="padding:8px 12px;color:#e2eaf6;font-size:14px">${val}</td>
          </tr>
        `).join("<tr><td colspan='2' style='height:4px'></td></tr>")}
      </table>
      <div style="margin-top:20px;padding:16px;background:rgba(0,188,212,0.05);border-radius:8px;border:1px solid rgba(0,188,212,0.15)">
        <div style="color:#4a627e;font-size:12px;margin-bottom:8px">MESSAGE</div>
        <div style="color:#e2eaf6;font-size:14px;line-height:1.6">${message.replace(/\n/g, "<br>")}</div>
      </div>
      <p style="margin-top:24px;font-size:11px;color:#3a526e">Sent from exyra.tech contact form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Exyra Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Exyra] New inquiry from ${name}${interest ? ` — ${interest}` : ""}`,
      html,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Exyra Technologies" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message — Exyra Technologies",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#060e1e;color:#e2eaf6;padding:32px;border-radius:12px;border:1px solid rgba(0,188,212,0.2)">
          <h2 style="color:#00bcd4">Hi ${name},</h2>
          <p style="color:#7a92b4;line-height:1.7">Thanks for reaching out to <strong style="color:#e2eaf6">Exyra Technologies</strong>. We've received your message and our team will get back to you within <strong style="color:#00e676">4 hours</strong>.</p>
          <p style="color:#7a92b4;line-height:1.7">Meanwhile, feel free to WhatsApp us directly at <a href="https://wa.me/919444528270" style="color:#00bcd4">+91 94445 28270</a>.</p>
          <p style="margin-top:32px;color:#4a627e;font-size:12px">— Team Exyra · exyratech@gmail.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
