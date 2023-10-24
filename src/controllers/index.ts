import express from "express"
import type { Application, Request, Response } from "express"
import ClientesController from './clientes.controller'

export default function routes(app: Application) {
    const router = express.Router()

    app.use('/api/v1', router)

    // endpoint 
    router.get("/test", (request: Request, response: Response) => {
        response.status(200).json({
            message: "todo ok"
        })
    })

    router.use("/clientes", ClientesController)
}

