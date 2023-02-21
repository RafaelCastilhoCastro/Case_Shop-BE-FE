import { Request, Response } from "express"
import { OrderBusiness } from "../business/OrderBusiness"
import { OrderCreateInputDTO } from "../models/Order"

export class OrderController {
    private orderBusiness = new OrderBusiness()

    createOrder = async (req: Request, res: Response) => {
        try {
            const newOrder:OrderCreateInputDTO = {
                deliveryDate: req.body.deliveryDate,
                fkClient:req.body.fkClient,
                productList:req.body.productList
            }

            await this.orderBusiness.createOrder(newOrder)

            res.status(201).send("Order added successully.")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}