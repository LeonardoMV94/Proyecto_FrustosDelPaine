import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { CategoriaCreate,CategoriaUpdate } from "../models/categorias.model";

export async function getAllCategoria() {
    try {
        const categoria = await db.categorias.findMany()
        return categoria
    } catch (error) {
        console.log("Error al obtener categorias ",error)
        return []
    }
    
}

export async function getOnerCategoriaById(id:number) {
    try {
        const categoria = await db.categorias.findFirst({
            where:{
                id:id
            }
        })
        return categoria
    } catch (error) {
        console.log("Error al obtener una categoria " ,error)
        return {}

    }
    
}

export async function createCategoria(categoria:CategoriaCreate) {
    try {
        return await db.categorias.create({
            data:categoria
        })

    } catch (error) {
        console.log("Error en crear categoria ",error)
        return{}
    }
    
}

export async function updateCategoria(id:number,categoria:CategoriaUpdate) {
    try {
        const result = await db.categorias.update({
            data:categoria,
            select:{
                id:true,
                categoria:true
            },
            where:{
                id:id
            }
        })
    } catch (error) {
        console.log("Error en update categoria ",error)
        return{}
    }
    
}

export async function deleteCategoria(id:number) {
    try {
        const result = await db.categorias.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
    } catch (error) {
        
    }
    
}
