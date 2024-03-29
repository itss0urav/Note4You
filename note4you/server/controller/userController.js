const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const postUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userFromDatabase = await User.findOne({ username });
    if (userFromDatabase) {
      return res
        .status(400)
        .json({ message: "User already exists with same username!" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashPass,
    });
    console.log(`User created: ${newUser}`);
    res.status(201).json({ passed: true, message: "Signup Success" });
  } catch (error) {
    console.error(`Error occurred during signup: ${error}`);
    res.status(500).json({ passed: false, message: "Signup Failed" });
  }
};

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ passed: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ user: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      console.log(`User logged in: ${user}`);
      res
        .status(200)
        .json({ passed: true, message: "Login Success", user, token });
    } else {
      res.status(400).json({ passed: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(`Error occurred during login: ${error}`);
    res.status(500).json({ passed: false, message: "Login Failed" });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res
        .status(400)
        .json({ passed: false, message: "No users  found" });
    }

    res.status(200).json({ passed: true, message: "Users found", users });
  } catch (error) {
    console.error(`Error occurred : ${error}`);
    res.status(500).json({ passed: false, message: "Failed" });
  }
};

module.exports = { postUser, getUser, getUsers };
