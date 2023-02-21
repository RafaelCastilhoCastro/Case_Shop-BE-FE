import express from 'express'
import { ProductController } from '../controller/ProductController'

const productController = new ProductController()

export const productRouter = express.Router()

productRouter.get("/getproducts", productController.getAllProducts)
productRouter.get("/getstock", productController.getStock)