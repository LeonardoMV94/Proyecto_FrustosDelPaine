import express from "express"
import type { Request,Response } from "express" 
import * as CategoriaServices from "../services/categoria.service"
import { Prisma } from "@prisma/client"
import { CategoriaUpdate } from "../models/categorias.model"
import { request } from "http"

const router = express.Router()

router.get("/", async (request:Request,response:Response)=>{
    try {
        const categoria = await CategoriaServices.getAllCategoria()
        response.status(200).json(categoria)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor", code:500})
    }
})

router.get("/:id",async (request:Request,response:Response)=>{
    const id : number = parseInt(request.params.id,0)
    try {
        const categoria = await CategoriaServices.getOnerCategoriaById(id)
        response.status(200).json(categoria)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
    }

})

router.put("/:id",async (request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    const categoriaBody:CategoriaUpdate = request.body
    try {
        const result = await CategoriaServices.updateCategoria(id,categoriaBody)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json({error,message:"error del servidor ",code:500})
        
    }
})

router.post("/",async(request:Request,response:Response)=>{
    try {
        const categoriaBody =request.body
        const result = await CategoriaServices.createCategoria(categoriaBody)
        return response.status(201).json(result)
    } catch (error:any) {
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            return response.status(500).json({
                mesaje:"No se pudo crear la categoria",
                code:error.code,
                meta:error.meta,
                error:error.message

            })
        }
        return response.status(500).json({
            mesaje:"No se pudo eliminar la categoria",
            code:error.code,
            meta:error.meta,
            error:error.message,
        })
    }
})

router.delete("/:id", async(request:Request,response:Response)=>{
    const id:number = parseInt(request.params.id,0)
    try {
        const result = await CategoriaServices.deleteCategoria(id)
        response.status(204).json(result)
    } catch (error) {
        response.status(500).json({error,message : "error del servidor ",code:500})        
    }
})

export default router