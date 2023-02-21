import { Request, Response } from "express"
import { ClientBusiness } from "../business/ClientBusiness"
import { Client, ClientCreateInputDTO } from "../models/Client"

export class ClientController {
    private clientBusiness = new ClientBusiness()

    createClient = async (req: Request, res: Response) => {
        try {
            const { name } = req.body
            const newUser = new ClientCreateInputDTO(name)

            await this.clientBusiness.createClient(newUser)

            res.status(201).send("Client added.")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    getAllClients = async (req: Request, res: Response) => {
        try {
            const clientsList: Client[] = await this.clientBusiness.getAllClients()
            res.status(200).send(clientsList)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}