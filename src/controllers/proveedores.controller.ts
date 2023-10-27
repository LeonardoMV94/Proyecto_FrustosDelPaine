import express from "express"
import type { Request, Response } from "express"
import * as ProveedoresServices from "../services/proveedores.service"
import { Prisma } from "@prisma/client"
import { ProveedorUpdate } from "../models/proveedores.model"

const router = express.Router()

router.get("/", async(request:Request,response:Response)=>{
    try {
        const proveedores = await ProveedoresServices.getAllProveedores()
        response.status(200).json(proveedores)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }
})

router.get("/:id", async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const proveedores = await ProveedoresServices.getOneProveedorById(id)
        response.status(200).json(proveedores)
    } catch (error) {
        response.status(500).json({error,message: "error del servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const proveedorBody : ProveedorUpdate = request.body
    try {
        const result = await ProveedoresServices.updateProveedor(id,proveedorBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error, message :"Error del servidor ",code:500})
    }
})

router.post("/", async(request:Request,response:Response)=>{
    try {
        const proveedorBody = request.body
        const result = await ProveedoresServices.createProveedor(proveedorBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje:"No se pudo crear el Proveedor ",
                code:error.code,
                meta:error.meta,
                error:error.message
            })
        }
        return response.status(500).json({
            mensaje:"No se pudo eliminar el Proveedor",
            code:error.code,
            meta:error.meta,
            error:error.message

        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const result = await ProveedoresServices.deleteProveedor(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error, message:"error del servidor ",code:500})
    }
})

export default router