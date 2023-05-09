const express = require("express");
const mongoose = require("mongoose");
const TemplatesRouter = express.Router();

const TemplateSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  img: {
    type: Array,
    required: true,
  },
});

const Templates = mongoose.model("Templates", TemplateSchema);

TemplatesRouter.get("/api/templates", async (req, res) => {
  try {
    const templates = await Templates.find({});
    res.status(200).json(templates);
  } catch (error) {
    res.send(error);
  }
});

module.exports = TemplatesRouter;
