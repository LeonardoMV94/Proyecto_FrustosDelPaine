import express from "express"
import type { Request, Response } from "express"
import * as ClientesServices from "../services/clientes.service"
import { Prisma } from "@prisma/client"
const router = express.Router()


router.get("/", async (request: Request, response: Response) => {
    try {
        const clientes = await ClientesServices.getAllClientes()
        response.status(200).json(clientes)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500, image: "https://http.dog/static/codes/dogs/large/300.webp" })
    }
})

router.post("/", async (request: Request, response: Response) => {
    try {
        const clienteBody = request.body
        const result = await ClientesServices.createCliente(clienteBody)
        return response.status(201).json(result);
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return response.status(500).json({
                mensaje: "No se pudo crear el cliente",
                code: error.code,
                meta: error.meta,
                error: error.message,

            })
        }
        return response.status(500).json({
            mensaje: "No se pudo eliminar el cliente",
            code: error.code,
            meta: error.meta,
            error: error.message,
          })
    }

})


export default router