import express from "express"
import type {Request,Response} from "express"
import * as ComprasServices from "../services/compras.service"
import { Prisma } from "@prisma/client"
import { CompraUpate } from "../models/compras.model"
import { readSync } from "fs"

const router = express.Router()

router.get("/", async(request:Request,response:Response)=>{
    try {
        const compras = await ComprasServices.getAllCompras()
        response.status(200).json(compras)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.get("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const compras = await ComprasServices.getOneCompraById(id)
        response.status(200).json(compras)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const compraBody : CompraUpate = request.body
    try {
        const result = await ComprasServices.updateCompra(id,compraBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }

})

router.post("/",async(request:Request,response:Response)=>{
    try {
        const compraBody=request.body
        const result = await ComprasServices.createCompra(compraBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje: "No se pudo crear la compra",
                code:error.code,
                meta:error.meta,
                error:error.message

            })

        }
        return response.status(500).json({
            mensaje: "No se pudo eliminar la compra",
            code:error.code,
            meta:error.meta,
            error:error.message

        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number=parseInt(request.params.id,0)
    try {
        const result = await ComprasServices.deleteCompra(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"Error del servidor ",code:500})
    }
})

export default router