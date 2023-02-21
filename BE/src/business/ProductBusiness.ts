import { ProductData } from "../data/ProductData"
import { CustomError } from "../errors/CustomError"
import { Product, ProductGetAllOutputDTO, StockDTO, StockOutputDTO } from "../models/Product"

export class ProductBusiness {
    private productData = new ProductData()

    getAllClients = async (): Promise<ProductGetAllOutputDTO[]> => {
        try {
            const productsList: Product[] = await this.productData.getAllProducts()

            const productsOutput: ProductGetAllOutputDTO[] = productsList.map((product) => {
                return new ProductGetAllOutputDTO(
                    product.id, product.name,
                    product.price, product.qty_stock)
            })

            return productsOutput
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    getStock = async (): Promise<StockOutputDTO[]> => {
        try {
            const stock: StockDTO[] = await this.productData.getStock()

            const stockOutput: StockOutputDTO[] = stock.map((product) => {
                return new StockOutputDTO(
                    product.name, product.qty_stock)
            })

            return stockOutput
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}