// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const user = mongoose.model("User", userSchema);

module.exports = user;
