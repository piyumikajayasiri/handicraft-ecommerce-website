import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productname: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
});

export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
