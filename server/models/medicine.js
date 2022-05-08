var mongoose = require("mongoose");

var MedicineSchema = new mongoose.Schema({
  medNameAndStrength: String,
  quantityType: String,
  availableQuantity: Number,
  totalQuantity: Number,
  totalPrice: Number,
  totalWorth: Number,
  expiryDate: Date,
  ndc: String,
  username: String,
  address: String,
  status: String,
  listDate: Date,
});

module.exports = mongoose.model("Medicine", MedicineSchema);
