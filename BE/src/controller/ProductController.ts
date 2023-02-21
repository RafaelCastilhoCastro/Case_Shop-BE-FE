import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ProductGetAllOutputDTO, StockOutputDTO } from "../models/Product"

export class ProductController {
    private productBusiness = new ProductBusiness()

    getAllProducts = async (req: Request, res: Response) => {
        try {
            const productsList: ProductGetAllOutputDTO[] = await this.productBusiness.getAllClients()
            res.status(200).send(productsList)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }


    getStock = async (req: Request, res: Response) => {
        try {
            const stock: StockOutputDTO[] = await this.productBusiness.getStock()
            res.status(200).send(stock)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}