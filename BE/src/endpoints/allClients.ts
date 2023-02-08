import { BaseDB } from "../data/BaseDB";
import { Request, Response } from "express";

export const getAllClients =async (req: Request, res: Response) => {
    let errorCode = 400;
    const baseDB = new BaseDB()
    try{
        const clients = await baseDB.connection.select('*').from('Case_Clients');

        res.status(200).send(clients)

    }catch(error:any){
        res.status(errorCode).send({message:error.message});
    }
}