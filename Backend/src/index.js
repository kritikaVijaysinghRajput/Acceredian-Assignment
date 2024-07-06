const express = require("express");
const app = express();
const referralRoutes = require("./routes/referralRoutes");

app.use(express.json());

app.use("/api/referral", referralRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
