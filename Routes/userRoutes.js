// Routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../Model/User"); // Corrected path

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body

    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log("Saved User:", savedUser); // Log the saved user
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error saving user:", error); // Log any errors
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
