const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  UUID: {
    type: String,
    required: false,
    unique: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
  },
  fullname: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  Class: {
    type: String,
    required: false,
  },
  div: {
    type: String,
    required: false,
  },
  securityQ: {
    type: String,
    required: false,
  },
  securityA: {
    type: String,
    required: false,
  },
  profilePic: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ["male", "female", "non-binary"],
  },
  age: {
    type: Number,
    required: false,
  },
  isAlumini: {
    type: Boolean,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
