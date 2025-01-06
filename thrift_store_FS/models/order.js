const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // User reference
  items: [
    {
      productId: { type: Number, required: true }, // Product ID
      name: { type: String, required: true }, // Product name
      price: { type: Number, required: true }, // Product price
      quantity: { type: Number, required: true }, // Quantity ordered
    },
  ],
  subTotal: { type: Number, required: true }, // Order total price
  createdAt: { type: Date, default: Date.now }, // Order creation time
});

module.exports = mongoose.model("Order", orderSchema);
