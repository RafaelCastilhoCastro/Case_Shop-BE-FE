import { CustomError } from "../errors/CustomError"
import { Client } from "../models/Client"
import { BaseDB } from "./BaseDB"


export class ClientData extends BaseDB {
    private tableName = "Case_Shopper_Clients"

    createClient = async (newClient: Client) => {
        try {
            await ClientData.connection(this.tableName).insert(newClient)

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }


    getAllClients = async ():Promise<Client[]> => {
        try {
            const clientList = await ClientData.connection(this.tableName)
            .select()
            return clientList
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}