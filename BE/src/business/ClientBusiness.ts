import { ClientData } from "../data/ClientData"
import { InvalidName } from "../errors/ClientErrors"
import { CustomError } from "../errors/CustomError"
import { Client, ClientCreateInputDTO } from "../models/Client"
import { IdGenerator } from "../services/IdGenerator"

export class ClientBusiness {
    private clientData = new ClientData()

    createClient = async (newClient: ClientCreateInputDTO) => {
        try {
            if (!newClient.getName()) {
                throw new InvalidName()
            }
            const id = IdGenerator.generateId()

            const client: Client = new Client(id, newClient.getName())

            await this.clientData.createClient(client)
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }

    getAllClients = async (): Promise<Client[]> => {
        try {
            const clientsList = await this.clientData.getAllClients()
            return clientsList
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}