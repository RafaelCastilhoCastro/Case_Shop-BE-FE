import { CustomError } from "../errors/CustomError"
import { Order, OrderProductDTO } from "../models/Order"
import { BaseDB } from "./BaseDB"


export class OrderData extends BaseDB {
    private orderTable = "Case_Shopper_Orders"
    private productsTable = "Case_Shopper_Products"

    getStock = async (productIds: string[]) => {
        try {
            const productStock = await OrderData.connection.select('qty_stock').from(this.productsTable)
                .whereIn('id', productIds)

            const productStockNumber = productStock.map((product) => Number(product.qty_stock))
            return productStockNumber
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    async createOrder(order: Order | Order[]) {
        try {
            await OrderData.connection(this.orderTable).insert(order)
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    async stockUpdate(productList: OrderProductDTO[], currentStock: number[]) {
        try {
            for (let i = 0;i < productList.length;i++) {
                await OrderData.connection(this.productsTable)
                    .where({ id: productList[i].id })
                    .update({ qty_stock: currentStock[i] - productList[i].qty })
            }
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}