import express from "express"
import type { Request, Response } from "express"
import * as DireccionesServices from "../services/direcciones.service"
import { Prisma } from "@prisma/client"
import { DireccionUpdate } from "../models/direcciones.model"

const router = express.Router()


router.get("/", async (request: Request, response: Response) => {
    try {
        const direcciones = await DireccionesServices.getAllDirecciones()
        response.status(200).json(direcciones)
    } catch (error) {
        response.status(500).json({ error, message: "error del servior al obtener ", code: 500 })
    }
})

router.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const direcciones = await DireccionesServices.getOneDireccionById(id)
        response.status(200).json(direcciones)
    } catch (error) {
        response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })

    }
})

router.get('/comunas', async (request: Request, response: Response) => {
    try {
        const comunas = await DireccionesServices.getComunasNested()
        response.status(200).json(comunas)
    } catch (error) {
        response.status(500).json({ error, message: "error al obtener en el servidor ", code: 500 })

    }
})

router.put("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    const direccionBody: DireccionUpdate = request.body
    try {
        const result = await DireccionesServices.updateDirecciones(id, direccionBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "Error del servidor ", code: 500 })
    }
})

router.post("/", async (request: Request, response: Response) => {
    try {
        const direccionBody = request.body
        const result = await DireccionesServices.createDireccion(direccionBody)
        return response.status(201).json(result)
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return response.status(500).json({
                mensaje: "No se pudo crear la direccion ",
                code: error.code,
                meta: error.meta,
                error: error.message
            })
        }
        return response.status(500).json({
            mensaje: "No se pudo eliminar la direccion ",
            code: error.code,
            meta: error.meta,
            error: error.message
        })
    }

})

router.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const result = await DireccionesServices.deleteDireccion(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "Error del servidor ", code: 500 })
    }
})

export default router