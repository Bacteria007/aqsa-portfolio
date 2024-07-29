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
      from: email,
      to: MY_EMAIL,
      subject: `Message from ${name}`,
      text: message,
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
