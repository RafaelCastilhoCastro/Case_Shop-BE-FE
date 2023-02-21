import { OrderData } from "../data/OrderData"
import { CustomError } from "../errors/CustomError"
import {
    DeliveryDateNotProvided, OutOfStock, ProductListNotProvided,
    UserIdNotProvided
} from "../errors/OrderErrors"
import { Order, OrderCreateInputDTO } from "../models/Order"
import { IdGenerator } from "../services/IdGenerator"

export class OrderBusiness {
    private ordertData = new OrderData()

    createOrder = async (order: OrderCreateInputDTO) => {
        try {
            if (!order.deliveryDate) {
                throw new DeliveryDateNotProvided
            }
            if (!order.fkClient) {
                throw new UserIdNotProvided
            }
            if (!order.productList) {
                throw new ProductListNotProvided
            }

            const productIds = order.productList.map((product) => product.id)
            const productStock = await this.ordertData.getStock(productIds)

            for (let i = 0;i < order.productList.length;i++) {
                if (order.productList[i].qty > productStock[i]) {
                    throw new OutOfStock
                }
            }

            const orderDate = new Date().toISOString().slice(0, 10)

            const newOrder: Order[] = []
            order.productList.forEach((product) => {
                const id = IdGenerator.generateId()
                const newPurchase = {
                    id,
                    order_date: orderDate,
                    delivery_date: order.deliveryDate,
                    qty: product.qty,
                    fk_client: order.fkClient,
                    fk_product: product.id
                }
                newOrder.push(newPurchase)
            })

            await this.ordertData.createOrder(newOrder)

            await this.ordertData.stockUpdate(order.productList, productStock)
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}