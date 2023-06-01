const asyncHandler = require("express-async-handler");
const connectDb = require("../config/DbConnect");

const UserModel = require("../models/UserModel");
const csv = require("csv-parser");
const fs = require("fs");

const uuids = [
  2121101, 2121102, 2121103, 2121104, 2121105, 2121106, 2121107, 2121108,
  2121109, 2121110, 2121111, 2121112, 2121113, 2121114, 2121115, 2121116,
  2121117, 2121118, 2121119, 2121120, 2121121, 2121122, 2121123, 2121124,
  2121125, 2121126, 2121127, 2121128, 2121129, 2121130, 2121131, 2121132,
  2121133, 2121134, 2121135, 2121136, 2121137, 2121138, 2121139, 2121140,
  2121141, 2121142, 2121143, 2121144, 2121145, 2121146, 2121147, 2121148,
  2121149, 2121150, 2121151, 2121152, 2121153, 2121154, 2121155, 2121156,
  2121157, 2121158, 2121159, 2121160, 2121161, 2121162, 2121163, 2121164,
  2121165, 2121166, 2121167, 2121168, 2121169, 2121170, 2121171, 2121172,
  2121173, 2121174, 2121175, 2121176, 2121177, 2121178, 2121179, 2121180,
  2121181, 2121182, 2121183, 2121184, 2121185, 2121186, 2121187, 2121188,
  2121189, 2121190, 2121191, 2121192, 2121193, 2121194, 2121195, 2121196,
  2121197, 2121198, 2121199, 2121200,
];

const getAllUser = asyncHandler(async (req, res) => {
  const users = await UserModel.find();

  res.status(200).json(users);
});

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
    securityQ,
    securityA,
    avatar_id,
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
    securityQ,
    securityA,
    avatar_id,
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

  res.status(200).json({ message: `${uuids.includes(number)}` });
};

module.exports = { getAllUser, getUser, createUser, loginUser, verifyUUID };
