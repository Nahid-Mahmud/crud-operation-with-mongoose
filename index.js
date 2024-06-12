// import required modules
const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");

// create express app

const app = express();

// port at which the server will run
const port = process.env.PORT || 3000;

// middleware to parse the request body
app.use(express.json());

// initial route
app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

//  use user routes

app.use("/users", userRoutes);

// listen to port

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
