const userData = require("../Database/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "jwtauth";
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Ensure the email and password fields are received
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user by email

    const user = await userData.findOne({ email: email });

    console.log("User:", user.id); // Log the user object

    if (!user) {
      return res.status(404).json({ message: "Sorry, user not found" });
    }
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Sorry, email or password is required" });
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        SECRET
      );
      const verifyToken = jwt.verify(token, SECRET);
      if (verifyToken) {
        return res.status(200).json({ message: "User login successfully" });
      }
    } else {
      return res.status(401).json({ message: "Sorry, password is invlaid" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = login;
