import express from "express";
import type { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { UsuarioUpdate } from "../models/ususarios.model";
import { request } from "http";
import * as UsuariosServices from "../services/usuarios.service"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { body, param, validationResult } from "express-validator";

const router = express.Router()

router.get("/", async (request: Request, response: Response) => {
    try {
        const ususarios = await UsuariosServices.getAllUsuarios()
        response.status(200).json(ususarios)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 })
    }

})

router.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    try {
        const usuarios = await UsuariosServices.getOneUsuarioById(id)
        response.status(200).json(usuarios)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 })
    }

})

router.put("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    const usuarioBody: UsuarioUpdate = request.body
    try {
        const result = await UsuariosServices.updateUsuario(id, usuarioBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 })
    }
})

router.post("/",
    body('Tipos_Usuarios_id').isInt({min: 1}),
    body('Colaboradores_id').isInt({min: 1}),
    body('password').isString().notEmpty().trim(),
     async (request: Request, response: Response) => {
    try {
        const usuarioBody = request.body
        const result = await UsuariosServices.createUsuario(usuarioBody)
        return response.status(201).json(result)
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return response.status(500).json({
                mesaje: "No se pudo crear el usuario",
                code: error.code,
                meta: error.meta,
                error: error.message
            })


        }

        return response.status(500).json({
            mesaje: "No se pudo eliminar el usuario",
            code: error.code,
            meta: error.meta,
            error: error.message
        })
    }
})

router.delete("/:id", param('id').isInt({ min: 1 }), async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 0)
    //validacion con express-validator
    const errors = validationResult(request)
    if (errors.isEmpty()) {
        response.status(400).json(errors)
    }
    try {
        const result = await UsuariosServices.deleteUsuario(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({ error, message: "error de servidor", code: 500 })
    }
})


export default router