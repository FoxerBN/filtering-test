import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  popularity: { type: Number, default: 0 },
});

const Product = mongoose.model("smartphones", productSchema);

export default Product;
