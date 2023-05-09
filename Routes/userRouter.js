const mongoose = require("mongoose");
const express = require("express");
const userRouter = express.Router();
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    default: "guest" + new Date().getTime(),
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default:
      "https://i.pinimg.com/564x/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg",
    required: false,
  },
  Desc: {
    type: String,
    required: false,
  },
  SocialMedia: {
    type: Array,
    required: false,
  },
  Phonenumber: {
    type: Number,
    required: false,
  },
  Skills: {
    type: Array,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

// Getting All Users
userRouter.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.send(err);
  }
});

// Getting User Based on ID
userRouter.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.send(err);
  }
});

// Login
userRouter.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.find({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(user);
  } catch (err) {
    res.send(err);
  }
});

// Register
userRouter.post("/api/users/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.send(err);
  }
});

// Updating the user
userRouter.put("/api/users/:id", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = userRouter;
