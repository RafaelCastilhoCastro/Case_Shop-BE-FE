import { Request, Response } from "express";
import { BaseDB } from "../data/BaseDB"

export const getAllProducts =async (req: Request, res: Response) => {
    let errorCode = 400;
    const baseDB = new BaseDB()
    try{
        const products = await baseDB.connection.select('*').from('Case_Products');

        res.status(200).send(products)

    }catch(error:any){
        res.status(errorCode).send({message:error.message});
    }
}