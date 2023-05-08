const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./Routes/userRouter");
const portfolioRouter = require("./Routes/portfolioRouter");
require("dotenv").config();

main().catch((err) => console.log(err));

async function main() {
  console.log("Database connection established");
}

const port = process.env.PORT || 3001;

// middleware
server.use(cors());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: false }));
server.use(userRouter);
server.use(portfolioRouter);

server.get("/", (req, res) => {
  res.send("Hello, world!");
});

server.listen(port, async (req, res) => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`Server listening on ${port}`);
});
