import { ClientData } from "../data/ClientData"
import { InvalidName } from "../errors/ClientErrors"
import { CustomError } from "../errors/CustomError"
import { Client, ClientCreateInputDTO } from "../models/Client"
import { IdGenerator } from "../services/IdGenerator"

export class ClientBusiness {
    createClient = async (newClient: ClientCreateInputDTO) => {
        try {
            if (!newClient.getName()) {
                throw new InvalidName()
            }
            const id = IdGenerator.generateId()

            const client:Client = new Client(newClient.getName(), id)

            const clientData = new ClientData()
            await clientData.createClient(client)
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}