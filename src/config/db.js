const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.CONNECTION_URI;
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
