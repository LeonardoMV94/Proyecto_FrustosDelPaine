import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { DetalleCompraCreate,DetalleCompraUpdate } from "../models/detalle-compra.model";

export async function getAllDetalleVenta() {
    try {
        const detalleVenta = await db.detalle_venta.findMany()
        return detalleVenta
    } catch (error) {
        console.log("Error en obtener los detalles venta ",error)
        return{}
    }
    
} 

export async function getOneDetalleVentaById(id:number) {
    try {
        const detalleVenta = await db.detalle_venta.findFirst({
            where:{
                


            }
        })
        return detalleVenta
    } catch (error) {
        console.log("Error al obtener un detalle venta ",error)
        return{}
    }
}

export async function createDetalleVenta(detalleVenta:DetalleCompraCreate) {
    try {
        

    } catch (error) {
        console.log("Error al crear detalle venta")
        return{}
    }
    
}

