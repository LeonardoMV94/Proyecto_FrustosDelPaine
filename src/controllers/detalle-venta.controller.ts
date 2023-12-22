import express from "express"
import type { Request,Response } from "express"
import * as DetalleVentaServices from "../services/detalle-venta.service"
import { Prisma } from "@prisma/client"
import { DetalleVentaUpdate } from "../models/detalle-venta.model"

const router = express.Router()

router.get("/",async (request:Request,response:Response)=>{
    try {
        const detalleVenta = await DetalleVentaServices.getAllDetalleVenta()
        response.status(200).json(detalleVenta)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.get("/:id",async(request:Request,response:Response)=>{
    const idVenta :number =parseInt(request.params.id,0)
    const idProducto:number =parseInt(request.params.id,0)
    const detalleVentaBody : DetalleVentaUpdate = request.body
    try {
        const result = await DetalleVentaServices.updateDetallateVenta(idVenta,idProducto,detalleVentaBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.put("/:id",async (request:Request,response:Response)=>{
    const idProducto :number = parseInt(request.params.id,0)
    const idVenta :number = parseInt(request.params.id,0)
    const detalleVentaBody : DetalleVentaUpdate = request.body
    try {
        const result  = await DetalleVentaServices.updateDetallateVenta(idVenta,idProducto,detalleVentaBody)
        response.status(200).json({result})
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.post("/",async(request:Request,response:Response)=>{
    try {
        const detalleVentaBody = request.body
        const result =await DetalleVentaServices.createDetalleVenta(detalleVentaBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mesaje:"No se pudo crear el detalle de Venta ",
                code:error.code,
                meta:error.meta,
                error:error.message
            })
        }
        return response.status(500).json({
            mesaje : "No se puede eliminar ",
            code:error.code,
            meta:error.meta,
            error:error.message

        })
    }
})


router.delete("/:id",async (request:Request,response:Response)=>{
    const idVenta:number =parseInt(request.params.id,0)
    const idProducto:number  = parseInt(request.params.id,0)
    try {
        const result = await DetalleVentaServices.deteleDetalleVenta(idProducto,idVenta)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error ,message:"error del servidor ",code:500})
    }
})

export default router