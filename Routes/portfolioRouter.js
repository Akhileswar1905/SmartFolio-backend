const express = require("express");
const portfolioRouter = express.Router();
const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

const Folio = mongoose.model("Folio", portfolioSchema);

module.exports = portfolioRouter;
