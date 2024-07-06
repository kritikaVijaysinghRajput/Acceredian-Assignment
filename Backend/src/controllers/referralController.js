const nodemailer = require("nodemailer");

const createReferral = async (req, res) => {
  const { referrer, referee, course, email } = req.body;

  if (!referrer || !referee || !course || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: { referrer, referee, course, email },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Referral Confirmation",
      text: `You have been referred to the course: ${course} by ${referrer}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.status(201).json(newReferral);
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create referral" });
  }
};

module.exports = { createReferral };
