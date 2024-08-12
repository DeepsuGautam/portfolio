const { Schema, models, model } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: { type: String, required: true },
  services: { type: [String], required: true },
});

const service = models?.service || model("service", schema);
module.exports = service;
