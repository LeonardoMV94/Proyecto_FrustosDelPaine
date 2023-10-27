import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { CompraCreate,CompraUpate } from "../models/compras.model";

export async function getAllCompras() {
    try {
        const compra = await db.compras.findMany()
        return compra
    } catch (error) {
        console.log("Error al obtener compras")
        return[]
    }
    
}

export async function getOneCompraById(id:number) {
    try {
        const compra = await db.compras.findFirst({
            where:{
                id:id
            }
        })
        return compra
    } catch (error) {
        console.log("Error al obtener una compra ",error)
        return{}
    }
    
}

export async function createCompra(compra:CompraCreate) {
    try {
        return await db.compras.create({
            data:compra
        })
    } catch (error) {
        console.log("Error createCompra : ", error)
        return {}
    }
    
}

export async function updateCompra(id:number,compra:CompraUpate) {
    try {
        const result = await db.compras.update({
            data:compra,
            select:{
                id:true,
                fecha:true,
                total_neto:true,
                iva:true,
                total:true
            },
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error al update compras: ",error)
        return {}
    }
    
}

export async function deleteCompra(id:number) {
    try {
        const result = await db.compras.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
    } catch (error) {
        console.log("Error en el delete de compras: ",error)
        return{}
    }
    
}