const mongoose = require("mongoose");

const skincareSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: { type: [String], required: true },
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Skincare", skincareSchema);
