const express = require("express");

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});
const upload = multer({
  storage,
});

const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

const { register, login, checkAuth } = require("../controllers/auth");
const { getUser, updateUser, deleteUser } = require("../controllers/user");

const {
  addLink,
  getLinks,
  deleteLink,
  updateViewCount,
  getLink,
} = require("../controllers/link");

router.post("/login", login);
router.post("/register", register);
router.get("/check-auth", auth, checkAuth);

router.post("/link", auth, upload.any("image"), addLink);
router.get("/preview-link/:id", auth, getLink);
router.get("/links", auth, getLinks);
router.delete("/link/:id", auth, deleteLink);
router.patch("/preview-link/:id", auth, updateViewCount);

router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
