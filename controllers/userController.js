const asyncHandler = require("express-async-handler");
const connectDb = require("../config/DbConnect");

const UserModel = require("../models/UserModel");
const csv = require("csv-parser");
const fs = require("fs");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await UserModel.find();

  res.status(200).json(users);
});

function checkNumberInCSV(number, filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const rows = fileContent.split("\n");

  for (let i = 0; i < rows.length; i++) {
    const rowData = rows[i].split(",");
    const rowNumber = Number(rowData[0]);

    if (!isNaN(rowNumber) && rowNumber === number) {
      return true;
    }
  }

  return false;
}

const getUser = asyncHandler(async (req, res) => {
  const UUID = req.params.UUID;
  const user = await UserModel.findOne({ UUID });

  if (!user) {
    res
      .status(404)
      .json({ message: "not found from this username " + usernameN });
  }

  res.status(200).json(user);
});

const createUser = asyncHandler(async (req, res) => {
  const {
    UUID,
    username,
    fullname,
    password,
    securityQA,
    profilePic,
    phoneNumber,
    gender,
    age,
    isAlumini,
    Class,
    div,
    bio,
  } = req.body;

  //check that any flead is empty or not

  const userAvailable = await UserModel.findOne({ UUID });
  const userAvailable2 = await UserModel.findOne({ username });

  if (userAvailable || userAvailable2) {
    res.status(400);
    throw new Error("User already registered!!");
  }

  //create a new user using UserModel
  const user = await UserModel.create({
    UUID,
    username,
    fullname,
    password,
    Class,
    div,
    securityQA,
    profilePic,
    phoneNumber,
    gender,
    age,
    isAlumini,
    bio,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }

  res.status(200).json(user);
});

const loginUser = asyncHandler(async (req, res) => {
  const username = req.params.username;
  const password = req.params.password;

  const user = await UserModel.findOne({ username, password });

  if (!user) {
    res
      .status(404)
      .json({ message: "not found from this username " + username });
  }

  res.status(200).json(user);
});

const verifyUUID = (req, res) => {
  const number = parseInt(req.params.UUID);

  const isNumberPresent = checkNumberInCSV(
    number,
    "C:/Users/shanu/OneDrive - tgv30/CampusLink/backend/CampusLink-BackEnd/uuids.csv"
  );

  res.status(200).json({ message: `${isNumberPresent}` });
};

module.exports = { getAllUser, getUser, createUser, loginUser, verifyUUID };
