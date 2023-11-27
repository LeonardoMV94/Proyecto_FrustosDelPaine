import express from "express"
import type { Request,Response } from "express"
import * as estadoPagoServices from "../services/estado-pago.service"
import { Prisma } from "@prisma/client"
import { EstadoPAgoUpdate } from "../models/estado-pago.model"

const router = express.Router()

router.get("/",async (request:Request,response:Response)=>{
    try {
        const estadoPago = await estadoPagoServices.getAllEstadoPago()
        response.status(200).json(estadoPago)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor  ",code:500})
    }

})

router.get("/:id",async (request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const estadoPago = await estadoPagoServices.getOneEstadoPagoById(id)
        response.status(200).json(estadoPago)
    } catch (error) {
        response.status(500).json({error,message :"Error del servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const estadoPagoBody : EstadoPAgoUpdate = request.body
    try {
        const result = await estadoPagoServices.updateEstadoPago(id,estadoPagoBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.post("/",async(request:Request,response:Response)=>{
    try {
        const estadoPagoBody = request.body
        const result = await estadoPagoServices.createEstadoPago(estadoPagoBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje:"No se puede crear el estado pago",
                code:error.code,
                meta:error.meta,
                error:error.message
            })
        }
        return response.status(500).json({
            mensaje:"No se pudo eliminar el estaod pago",
            code:error.code,
            meta:error.meta,
            error:error.message

        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const result = await estadoPagoServices.deleteEstadoPago(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor al eliminar ",code:500})
    }
})

export default router