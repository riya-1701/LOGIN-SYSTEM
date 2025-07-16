//To secure compare passwords
const bcrypt = require("bcrypt");
const db = require("../config/db");

//User Login Function
const userLogin = (req, res) => {
  const { email, password } = req.body;

  //Check if all fields are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ meessage: "Email and Password are required" });
  }

  //Find user by email: ? is a placeholder which is later replaced by email in db.query
  const query = `Select* from users where email = ?`;
  db.query(query, [email], async (error, res) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Results is an array that contains rows returned from the SQL query.
    //     Ex: [{ id: 1, name: 'Riya', email: 'riya@example.com', password: 'hashed_pw' }]
    // We write results[0] to get the first row — because there should be only one user per email.

    const user = results[0];

    // Compare hashed password (use bcrypt.compare if password is hashed)

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ meassage: "Invalid email or password" });
    }
    return res.status(200).json({
      message: "Login Successful",
      user: { id: user.id, email: user.email },
    });
  });
};

module.exports = { userLogin };
