import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { VentaCreate,VentaUpdate } from "../models/ventas.model";

export async function getAllVentas() {
    try {
        const ventas = await db.venta.findMany()
        return ventas
    } catch (error) {
        console.log("Erorr al obtener ventas",error)
        return{}
    }
    
}

export async function getOneVentaById(id:number) {
    try {
        const result = await db.venta.findFirst({
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Errro al obtener una venta ",error)
        return{}
    }
    
}

export async function createVenta( venta:VentaCreate) {
    try {
        return await db.venta.create({
            data:venta
        })
    } catch (error) {
        console.log("Error de Prisma Create ",error)
        return{}
    }
}

export async function updateVenta(id:number , venta:VentaUpdate) {
    try {
        const result = await db.venta.update({
            data:venta,
            select:{
                id:true,
                neto:true,
                iva:true,
                total:true,
                fecha:true
            },
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error de prisma update ",error)
        return{}
    }
    
}

export async function deleteVenta(id:number) {
    try {
        const result = await db.venta.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
    } catch (error) {
        console.log("Error al delete Prisma ", error)
        return {}
    }
    
}
