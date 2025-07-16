const express = require("express");
const router = express.Router();

const { userLogin } = require("../controllers/userController");

//Login router
router.post("/login", userLogin);

module.exports = router;
