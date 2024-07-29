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

    // Email options to send the user's message to your email
    const mailToMeOptions = {
      from: MY_EMAIL,
      to: MY_EMAIL,
      subject: `New message from ${name}`,
      text: `You have received a new message from your portfolio website:

      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    // Email options to send a confirmation to the user
    const mailToUserOptions = {
      from: MY_EMAIL,
      to: email,
      subject: 'Thank you for reaching out!',
      text: `Hello ${name},

      Thank you for reaching out to me through my portfolio. I appreciate you taking the time to get in touch.
      I have received your message and will review it shortly. If your inquiry requires a detailed response, I will get back to you as soon as possible. In the meantime, if you have any additional information or questions, please feel free to reply to this email.

      Thank you once again for contacting me. I look forward to connecting with you.

      Best regards,
      Aqsa`,
    };

    try {
      // Send the user's message to your email
      await transporter.sendMail(mailToMeOptions);
      // Send a confirmation email to the user
      await transporter.sendMail(mailToUserOptions);

      res.status(200).send('Message sent successfully!');
    } catch (error) {
      console.log('Email:', process.env.NEXT_MY_EMAIL_ID);
      console.log('Password:', process.env.NEXT_MY_EMAIL_PASSWORD);
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send message.');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
