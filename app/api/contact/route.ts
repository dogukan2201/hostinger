import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Hedef e-posta adresi
      subject: `İletişim Formu: ${subject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nMesaj:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "E-posta başarıyla gönderildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "E-posta gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
