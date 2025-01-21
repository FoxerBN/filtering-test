import express from 'express';
import { getProducts } from "../controllers/productFetch.js"
import { getOneProduct } from "../controllers/oneProduct.js"
const productRouter = express.Router();

productRouter.get('/', getProducts)
productRouter.get('/:id', getOneProduct)

export default productRouter;