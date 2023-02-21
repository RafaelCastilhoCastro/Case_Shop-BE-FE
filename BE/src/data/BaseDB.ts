import { knex } from 'knex'

import dotenv from "dotenv"

dotenv.config()

export class BaseDB {
    protected static tableClients = "Case_Shop_Clients"
    protected static tableProducts = "Case_Shop_Products"
    protected static tableOrders = "Case_Shop_Orders"

    static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        },
    })
}