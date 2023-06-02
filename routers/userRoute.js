const express = require("express");

const {
  getAllUser,
  getUser,
  createUser,
  loginUser,
  verifyUUID,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);

router.route("/:UUID").get(getUser);

router.route("/login/:username/:password").get(loginUser);

router.route("/verifyUser/:UUID/:username").get(verifyUUID);

module.exports = router;
