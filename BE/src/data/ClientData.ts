import { CustomError } from "../errors/CustomError"
import { Client } from "../models/Client"
import { BaseDB } from "./BaseDB"


export class ClientData extends BaseDB {
    createClient = async (newClient: Client) => {
        try {
            await ClientData.connection("Case_Clients").insert({ newClient })

        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}