import express from 'express'
import { OrderController } from '../controller/OrderController'

const orderController = new OrderController()

export const orderRouter = express.Router()

orderRouter.post("/neworder", orderController.createOrder)