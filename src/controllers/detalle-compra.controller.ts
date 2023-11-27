import express from "express"
import type { Request,Response } from "express"
import * as DetalleCompraServices from "../services/detalle-compra.service"
import { Prisma } from "@prisma/client"
import { DetalleCompraUpdate } from "../models/detalle-compra.model"

const router  = express.Router()


router.get("/",async(request:Request,response:Response)=>{
    try {
        const detalleCompra = await DetalleCompraServices.getAllDetalleCompra()
        response.status(200).json(detalleCompra)
    } catch (error) {
        response.status(500).json({error , message:"error el servidor ",code:500})
    }
})

router.get("/:id", async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const  detalleCompra = await DetalleCompraServices.getOneDetalleCompraById(id)
        response.status(200).json(detalleCompra)
    } catch (error) {
        response.status(500).json({error , message:"error el servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const idProducto:number = parseInt(request.params.id,0)
    const idCompra:number = parseInt(request.params.id,0)
    const detalleCompraBody : DetalleCompraUpdate = request.body
    try {
        const result =await DetalleCompraServices.updateDetalleCompra(idCompra,idProducto,detalleCompraBody)
        response.status(200).json({result})
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.post("/",async (request:Request,response:Response)=>{
    try {
        const detalleCompraBody =request.body
        const result = await DetalleCompraServices.CreateDetalleCompra(detalleCompraBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje:"No se crea el detalle compra",
                code:error.code,
                meta:error.meta,
                error:error.message
            })

        }
        return response.status(500).json({
            mensaje:"No se puede eliminar ",
            code:error.code,
            meta:error.meta,
            error:error.message
        })
    }
})

router.delete("/:id",async (request:Request,response:Response)=>{
    const idCompra:number = parseInt(request.params.id,0)
    const idProducto:number = parseInt(request.params.id,0)
    try {
        const result = await DetalleCompraServices.deleteDetalleCompra(idCompra,idProducto)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor  ",code:500})
    }
})


export default router