import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body

    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
      }
    })

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // efekanın mail adresi
      subject: `İletişim Formu: ${subject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nMesaj:\n${message}`
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'E-posta başarıyla gönderildi.' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'E-posta gönderilirken bir hata oluştu.' })
    }
  } else {
    res.status(405).json({ message: 'Sadece POST istekleri kabul edilir.' })
  }
}