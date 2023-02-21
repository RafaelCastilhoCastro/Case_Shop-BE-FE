import { CustomError } from "../errors/CustomError"
import { Product, StockDTO } from "../models/Product"
import { BaseDB } from "./BaseDB"


export class ProductData extends BaseDB {
    private tableName = "Case_Shopper_Products"

    getAllProducts = async (): Promise<Product[]> => {
        try {
            const productList = await ProductData.connection(this.tableName)
                .select()
            return productList
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }


    getStock = async () => {
        try {
            const stockList = await ProductData.connection(this.tableName)
                .select('name', 'qty_stock')
            return stockList
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}