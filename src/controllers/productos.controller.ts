import express from  "express"
import type { Request,Response } from "express"
import * as ProductosServices from "../services/productos.service"
import { Prisma } from "@prisma/client"
import { ProductoUpdate } from "../models/productos.model"
import { request } from "http"

const router = express.Router()

router.get("/", async(request:Request,response:Response)=>{
    try {
        const productos = await ProductosServices.getAllProductos()
        response.status(200).json(productos)
    } catch (error) {
        response.status(500).json({error, message:"Error del servidor ",code:500})
    }
})

router.get("/:id", async(request:Request,response:Response)=>{
    const id :number = parseInt(request.params.id,0)
    try {
        const productos = await ProductosServices.getOneProductoById(id)
        response.status(200).json(productos)
    } catch (error) {
        response.status(500).json({error,message:"error de servidor ",code:500})
    }
})

router.put("/:id",async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const productoBody:ProductoUpdate=request.body
    try {
        const result = await ProductosServices.updateProducto(id,productoBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }
})

router.post("/",async(request:Request,response:Response)=>{
    try {
        const productoBody = request.body
        const result = await ProductosServices.createProducto(productoBody)
        return response.status(201).json(result)
        
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mensaje:"no se pudo crear el Producto",
                code:error.code,
                meta:error.meta,
                error:error.message
            })
        }
        return response.status(500).json({
            mensaje :" No se pudo eliminar el Producto",
            code:error.code,
            meta:error.meta,
            error:error.message

        })
    }
})

router.delete("/:id",async(request:Request,response:Response)=>{
    const id:number= parseInt(request.params.id,0)
    try {
        const result = await ProductosServices.deleteProducto(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ", code:500})
    }
})

export default router