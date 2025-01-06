const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  items: [
    {
      productId: { type: Number, required: true }, // Product ID
      name: { type: String, required: true }, // Product name
      price: { type: Number, required: true }, // Product price
      image: { type: String }, // Product image URL
      quantity: { type: Number, required: true, default: 1 }, // Quantity in cart
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
