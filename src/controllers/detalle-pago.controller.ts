import express from "express"
import type { Request,Response } from "express"
import * as detallePagoServices from "../services/detalle-pago.service"
import { Prisma } from "@prisma/client"
import { DetallePagoUpdate } from "../models/detalle-pago.model"

const router = express.Router()


router.get("/",async(request:Request,response:Response)=>{
    try {
        const detallePago = await detallePagoServices.getAllDetallePago()
        response.status(200).json(detallePago)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }
})

router.get("/:id",async(request:Request,response:Response)=>{
    const id:number =parseInt(request.params.id,0)
    try {
        const detallePago =await detallePagoServices.getOneDetallePagoBtId(id)
        response.status(200).json(detallePago)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number =parseInt(request.params.id,0)
    const detallePagoBody :DetallePagoUpdate =request.body
    try {
        const result = await detallePagoServices.upateDetallePAgo(id,detallePagoBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }
})


router.post("/",async(request:Request,response:Response)=>{
    try {
        const detallePagoBody =request.body
        const result =await detallePagoServices.createDetallePAgo(detallePagoBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mesaje:"No se puede crear detalle Pago",
                code:error.code,
                meta:error.meta,
                error:error.message
            })
        }
        return response.status(500).json({
            mensaje:"No se a podido eliminar ",
            code:error.code,
            meta:error.meta,
            error:error.message
        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number =parseInt(request.params.id,0)
    try {
        const result = await detallePagoServices.deleteDetallePago(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }
})

export default router