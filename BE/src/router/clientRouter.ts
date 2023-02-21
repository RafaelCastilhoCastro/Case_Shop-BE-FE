import express from 'express'
import { ClientController } from '../controller/ClientController'

const clientController = new ClientController()

export const clientRouter = express.Router()

clientRouter.get("/getclients", clientController.getAllClients)
clientRouter.post("/create", clientController.createClient)