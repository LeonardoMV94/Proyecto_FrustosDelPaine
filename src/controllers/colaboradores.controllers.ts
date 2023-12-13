import express, { response } from "express"
import { body, validationResult } from 'express-validator'
import type { Request, Response } from "express"
import * as ColaboradoresServices from "../services/colaboradores.service"
import { Prisma } from "@prisma/client"
import { ColaboradorUpdate } from "../models/colaboradores.model"

const router = express.Router()

router.get("/", async (request: Request, response: Response) => {
    try {
        const colaboradores = await ColaboradoresServices.getAllColabradores()
        response.status(200).json(colaboradores)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 })
    }

})

router.get('/correo', body('correo').isString(), async (request: Request, response: Response) => {
    const correo: string = request.body.correo;
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        response.status(400).send({ message: 'bad request' })
    }
    try {
        const colaborador = await ColaboradoresServices.getOneColaboradorByCorreo(correo)
        console.log(colaborador)
        response.status(200).json(colaborador)

    } catch (error) {
        response.status(500).json({ error, message: "Error de servidor ", code: 500 })
    }
})

router.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const colaboradores = await ColaboradoresServices.getOneColaboradorById(id)
        response.status(200).json(colaboradores)
    } catch (error) {
        response.status(500).json({ error, message: " error de servidor ", code: 500 })
    }

})



router.put("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    const colaboradorBody: ColaboradorUpdate = request.body
    try {
        const result = await ColaboradoresServices.updateColaborador(id, colaboradorBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "Error de servidor ", code: 500 })
    }
})



router.post("/", async (request: Request, Response: Response) => {
    try {
        const colaboradorBody = request.body
        const result = await ColaboradoresServices.createColaborador(colaboradorBody)
        return response.status(201).json(result)
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return response.status(500).json({
                mesaje: "No se pudo crear el colaborador",
                code: error.code,
                meta: error.meta,
                error: error.message
            })
        }
        return response.status(500).json({
            mensaje: "No se pudo eliminar el colaborador",
            code: error.code,
            meta: error.meta,
            error: error.message



        })
    }

})


router.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const result = await ColaboradoresServices.deleteColaborador(id)
        response.status(204).json({ result })
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 })
    }
})

export default router