const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers/userController");
const authenticateToken = require("../middleware/verifyToken");

//Login router
router.post("/login", userLogin);

//Protected Route: only accessible with token
router.get("/dashboard", authenticateToken, (req, res) => {
  res.status(200).json({
    message: "Welcome to the Dashboard",
    user: req.user,
    //decoded token data
  });
});

module.exports = router;
