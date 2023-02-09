import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness"
import { CustomError } from "../errors/CustomError"
import { ClientCreateInputDTO } from "../models/Client"

export class ClientController{
    
    createClient = async (req: Request, res: Response) => {
        try{
            const {name} = req.body
            const newUser = new ClientCreateInputDTO(name)
            
            const clientBusiness = new ClientBusiness()
            await clientBusiness.createClient(newUser)

            res.status(200).send("Client added.")
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
}
}