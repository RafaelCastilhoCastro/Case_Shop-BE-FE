import { CustomError } from "../errors/CustomError"
import { Product } from "../models/Product"
import { BaseDB } from "./BaseDB"


export class ProductData extends BaseDB {
    getAllProducts = async (): Promise<Product[]> => {
        try {
            const productList = await ProductData.connection(BaseDB.tableProducts)
                .select()
            return productList
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }


    getStock = async () => {
        try {
            const stockList = await ProductData.connection(BaseDB.tableProducts)
                .select('name', 'qty_stock')
            return stockList
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}