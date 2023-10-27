import express from "express"
import type { Request,Response } from "express"
import * as TipoUsuarioServices from "../services/tipo-usuario.service"
import { Prisma } from "@prisma/client"
import { tipoUsuario, tipoUsuarioUpdate } from "../models/tipoUsuarios.model"

const router = express.Router()

router.get("/", async(request:Request,response:Response)=>{
    try {
        const tipoUsuarios = await TipoUsuarioServices.getAllTipoUsuario()
        response.status(200).json(tipoUsuarios)
    } catch (error) {
        response.status(500).json({error, message:"Error del servidor ",code:500})

    }
})

router.get("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const tipoUsuario = await TipoUsuarioServices.getOneTipoUsuarioById(id)
        response.status(200).json(tipoUsuario)
    } catch (error) {
        response.status(500).json({error ,message:"error del servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const tipoUsuarioBody :tipoUsuarioUpdate =request.body
    try {
        const result = await TipoUsuarioServices.updateTipoUsuario(id,tipoUsuarioBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"Error al update servidor ",code:500})
    }
})

router.post("/", async(request:Request,response:Response)=>{
    try {
        const tipoUsuarioBody = request.body
        const result = await TipoUsuarioServices.createTipoUsuario(tipoUsuarioBody)
        response.status(201).json({result})
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje:"no se pudo crear el tipo usuario ",
                code:error.code,
                meta:error.meta,
                error:error.message
            })
        }
        return response.status(500).json({
            mensaje:"No se pudo eliminar el tipo usuario",
            code:error.code,
            meta:error.meta,
            error:error.message

        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const result = await TipoUsuarioServices.deleteTipoUsuario(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor",code:500})
    }
})

export default router