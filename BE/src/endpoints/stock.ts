import { Request, Response } from "express"
import { BaseDB } from "../data/BaseDB"

export const getStock = async (req: Request, res: Response) => {
    let errorCode = 400
    const baseDB = new BaseDB()
    try {
        const stock = await baseDB.connection.select('name', "qty_stock").from('Case_Products')

        res.status(200).send(stock)

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}