import express from "express"
import type { Request,Response } from "express"
import * as VentaServices from "../services/ventas.service"
import { Prisma } from "@prisma/client"
import { VentaUpdate } from "../models/ventas.model"
import { request } from "http"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

const router = express.Router()

router.get("/",async(request:Request,response:Response)=>{
    try {
        const ventas = await VentaServices.getAllVentas()
        response.status(200).json(ventas)
    } catch (error) {
        response.status(500).json({error , message :"error de servidor",code:500})
    }
})

router.get("/:id", async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const ventas =await VentaServices.getOneVentaById(id)
        response.status(200).json(ventas)
    } catch (error) {
        response.status(500).json({error , message: "error de servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const ventaBody : VentaUpdate = request.body
    try {
        const result = await VentaServices.updateVenta(id,ventaBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error de servidor",code:500})
    }
})

router.post("/", async(request:Request,response:Response)=>{
   try {
    const ventaBody=request.body
    const result = await VentaServices.createVenta(ventaBody)
    return response.status(201).json(result)
   } catch (error:any) {
    if(error instanceof PrismaClientKnownRequestError){
        return response.status(500).json({
            mensaje:"No se pudo crear la venta",
            code:error.code,
            meta:error.meta,
            error:error.message
        })
    }
    return response.status(500).json({
        mensaje:"No se pudo eliminar la venta",
        code:error.code,
        meta:error.meta,
        error:error.message
    })
   }
})

router.delete("/:id", async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const result = await VentaServices.deleteVenta(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

export default router

