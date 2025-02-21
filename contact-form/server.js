require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API to handle form submissions (without email)
app.post("/submit-form", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(200).json({ message: "Form submitted successfully (Email Disabled)" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error submitting form" });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));