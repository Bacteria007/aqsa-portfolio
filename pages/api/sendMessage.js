import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const MY_EMAIL = process.env.NEXT_MY_EMAIL_ID;
    const MY_PASSWORD = process.env.NEXT_MY_EMAIL_PASSWORD;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: MY_EMAIL,
        pass: MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: MY_EMAIL,
      to: email,
      subject: `Re: Message from ${name}`,
      text: `Hello ${name},

Thank you for reaching out to me through my portfolio. I appreciate you taking the time to get in touch.

I have received your message and will review it shortly. If your inquiry requires a detailed response, I will get back to you as soon as possible. In the meantime, if you have any additional information or questions, please feel free to reply to this email.

Thank you once again for contacting me. I look forward to connecting with you.

Best regards,
Aqsa`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send message.');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
