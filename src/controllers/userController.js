const User = require("../models/userModel");

const postUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      age: req.body.age,
    });

    const userConfirmation = await newUser.save();

    res.status(201).send({
      message: "User created successfully",
      user: userConfirmation,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: "User not created",
      error: err.message,
    });
  }
};

// get all users

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.status(200).send(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: "Users are not Availabe",
      error: err.message,
    });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    res.status(200).send({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: "User not updated",
      error: err.message,
    });
  }
};

// delete user by id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    res.status(200).send({
      message: "User deleted successfully",
      user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: "User not deleted",
      error: err.message,
    });
  }
};

module.exports = { postUser, getAllUsers, updateUser, deleteUser };
