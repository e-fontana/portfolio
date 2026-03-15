import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, project, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.CONTACT_FROM_HOST,
      port: Number(process.env.CONTACT_FROM_PORT),
      secure: true,
      auth: {
        user: process.env.CONTACT_FROM_EMAIL,
        pass: process.env.CONTACT_FROM_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_FROM_EMAIL,
      replyTo: email,
      subject: `Portfolio contact: ${project}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project: ${project}

        Message:
        ${message}
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}