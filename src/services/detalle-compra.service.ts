import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { DetalleCompraCreate,DetalleCompraUpdate } from "../models/detalle-compra.model";
import { deleteCompra } from "./compras.service";

export async function getAllDetalleCompra() {
    try {
        const detalleCompra = await db.detalle_Compras.findMany({
            include:{
                Compras:true,
                Productos:true
            }
        })
        return detalleCompra
    } catch (error) {
        console.log("Error al obtener Detalle Compra",error)
        return[]
    }
    
}

export async function getOneDetalleCompraById(id:number) {
    try {
        const result = await db.detalle_Compras.findFirst({
            where:{
                Compras_id:id,
                Productos_id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error al obtener el detalle compra")
        return{}
    }
    
}

export async function Create(detalleCompra:DetalleCompraCreate) {
    try {
        return await db.detalle_Compras.create({
            data:detalleCompra
        })
    } catch (error) {
        console.log("Error en Prisma Create",error)
        return {}
    }
    
}

export async function updateDetalleCompra(idCompra:number, idProducto: number,detalleCompra:DetalleCompraUpdate) {
    try {
        const updatedDetalleCompra = await db.detalle_Compras.updateMany({
            where: {
                Compras_id: idCompra,
                Productos_id: idProducto,
            },
            data: detalleCompra,
        });

        return updatedDetalleCompra;
       
    } catch (error) {
        console.log("Error en Prisma Update",error)
        return {}
    }

}

export async function deleteDetalleCompra(idCompra:number,idProducto:number) {
    try {
        const deleteDetalleCompra = await db.detalle_Compras.delete({
            where:{
                Compras_id_Productos_id:{
                    Compras_id:idCompra,
                    Productos_id: idProducto
                }
            }
        })
        
        return deleteDetalleCompra
    } catch (error) {
        console.log("Error al delete Prisma ",error)
        return {}
    }
    
}