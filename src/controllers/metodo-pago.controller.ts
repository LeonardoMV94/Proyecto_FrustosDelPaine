import express from "express"
import type { Request,Response } from "express"
import * as metodoPAgoServices from "../services/metodo-pago.service"
import { Prisma } from "@prisma/client"
import { CategoriaUpdate } from "../models/categorias.model"
import { MetodoPagoUpdate } from "../models/metodo-pago.model"

const router = express.Router()

router.get("/",async(request:Request,response:Response)=>{
try {
    const metodoPago = await metodoPAgoServices.getAllMetodoPago()
    response.status(200).json(metodoPago)
} catch (error) {
    response.status(500).json({error,message:"Error del servidor ",code:500})
}

})

router.get("/:id",async(request:Request,response:Response)=>{
    const id:number= parseInt(request.params.id,0)
    try {
        const categoria = await metodoPAgoServices.getOneMetodoPagoById(id)
        response.status(200).json(categoria)

    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})

    }

})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const metodoPAgoBody : MetodoPagoUpdate= request.body
    try {
        const result = await metodoPAgoServices.updateMetodoPago(id,metodoPAgoBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error de servicio ",code:500})
    }
})

router.post("/",async(request:Request,response:Response)=>{
    try {
        const metodoPAgoBody =request.body
        const result = await metodoPAgoServices.createMetodoPago(metodoPAgoBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje: "No se puede crear el metodo pago",
                code:error.code,
                meta:error.meta,
                error:error.message

            })
        }
        return response.status(500).json({
            mensaje:"no se puede eliminar el metodo pago",
            code:error.code,
            meta:error.meta,
            error:error.message
        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const result = await metodoPAgoServices.deleteMetodoPago(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }

})

export default router