import express from "express"
import type { Request, Response } from "express"
import * as ClientesServices from "../services/clientes.service"
import { Prisma } from "@prisma/client"
import { ClienteUpdate } from "../models/clientes.model"
const router = express.Router()


router.get("/", async (request: Request, response: Response) => {
    try {
        const clientes = await ClientesServices.getAllClientes()
        response.status(200).json(clientes)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 })
    }
})

router.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const clientes = await ClientesServices.getOneClienteById(id)
        response.status(200).json(clientes)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 })
    }
})

router.put("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    const clienteBody: ClienteUpdate = request.body
    try {
        const result = await ClientesServices.updateCliente(id, clienteBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 })
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

router.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const result = await ClientesServices.deleteCliente(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 })
    }
})



export default router