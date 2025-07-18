// For Loading Environment variables files
// require("dotenv").config({path: ../.env});

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const db = require("./config/db");

//To check server is running or not
app.get("/", (req, res) => {
  res.send("Server is working!");
});

const cors = require("cors");
app.use(cors());

// This line is required to parse JSON request body
app.use(express.json());

// Use routes
app.use("/", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
