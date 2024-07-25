const userData = require("../Database/userSchema");
const jwt = require("jsonwebtoken");
const SECRET = "jwtauth";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    console.log("passowrd hash", hash);
    console.log("Request body:", req.body); // Log the request body

    // Ensure the email and password fields are received
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user by email

    const user = await userData.create({ email: email, password: hash });
    console.log("User:", user.id); // Log the user object

    if (!user) {
      return res.status(404).json({ message: "Sorry, user not found" });
    }
    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Sorry, email or password is required" });
    }

    // assigning token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      SECRET
    );

    const userUpdated = await userData.findByIdAndUpdate(
      { _id: user.id },
      {$set: {token: token} },
      {new:true}
    );
    console.log(userUpdated);

    return res
      .status(200)
      .json({ message: "User Craeted successfully", token, hash });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = signup;
