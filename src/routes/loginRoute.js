const express = require("express");
const router = express.Router();

const { getOtp } = require("../controller/loginController");

router.post("/getOtp", getOtp);

module.exports = router;
