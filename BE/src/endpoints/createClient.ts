import { Request, Response } from "express";
import { BaseDB } from "../data/BaseDB"

export const createClient =async (req: Request, res: Response) => {
    let errorCode = 400;
    const baseDB = new BaseDB()
    try{
        const name = req.body.name;
        if (!name){
            throw new Error("Nome invalido!")
        }
        await  baseDB.connection("Case_Clients").insert({
            name
        })
        res.status(200).send("Cliente criado com sucesso!!")

    }catch(error:any){
        res.status(errorCode).send({message:error.message});
    }
}