const express = require("express");

const {
  getAllUser,
  getUser,
  createUser,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);

router.route("/:UUID").get(getUser);

router.route("/login/:username/:password").get(loginUser);

module.exports = router;
