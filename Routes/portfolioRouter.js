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

portfolioRouter.get("/api/folios", async (req, res) => {
  try {
    const res = await Folio.find({});
    res.status(200).json(res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = portfolioRouter;
