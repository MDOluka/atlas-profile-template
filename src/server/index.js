const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields required" });

  console.log("New Contact:", { name, email, message });

  // TODO: Add DB or email integration here

  res.json({ success: true });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
