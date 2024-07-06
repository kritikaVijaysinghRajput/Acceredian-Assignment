const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { referrer, referee, email, courseName } = req.body;

  try {
    const referral = await prisma.referral.create({
      data: {
        referrer,
        referee,
        email,
        courseName,
      },
    });

    res
      .status(201)
      .json({ message: "Referral created successfully", referral });
  } catch (error) {
    console.error("Error creating referral:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
