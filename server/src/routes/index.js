const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");

const { register, login } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
