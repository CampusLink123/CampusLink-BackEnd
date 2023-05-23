const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  UUID: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  Div: {
    type: String,
    required: true,
  },
  securityQA: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  profilePic: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "non-binary"],
  },
  age: {
    type: Number,
    required: true,
  },
  isAlumini: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
