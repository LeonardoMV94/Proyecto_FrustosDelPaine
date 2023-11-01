import { Detalle_venta, Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { DetalleVentaCreate,DetalleVentaUpdate } from "../models/detalle-venta.model";

export async function getAllDetalleVenta() {
    try {
        const detalleVenta = await db.detalle_venta.findMany({
            include:{
                Productos:true,
                Venta:true
            }
        })
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
                Venta_id:id,
                Producto_id:id
            },
            
        })
        return detalleVenta
    } catch (error) {
        console.log("Error al obtener un detalle venta ",error)
        return{}
    }
}

export async function createDetalleVenta(detalleVenta:DetalleVentaCreate) {
    try {
        return await db.detalle_venta.create({
         data:detalleVenta
        });

    } catch (error) {
        console.log("Error al crear detalle venta")
        return{}
    }
    
}

export async function updateDetallateVenta(idVenta:number,idProducto:number,detalleVenta:DetalleVentaUpdate) {
    try {
        const upateDetalleVenta= await db.detalle_venta.updateMany({
            where: {
                Venta_id: idVenta,
                Producto_id: idProducto,
            },
            data:detalleVenta,
        });

        return upateDetalleVenta;

    } catch (error) {
        console.log("Error en Prisma Update",error)
        return {}
    }
    
}

export async function deteleDetalleVenta(idVenta:number,idProducto:number) {
    try {
        const deteleDetalleVenta = await db.detalle_venta.delete({
            where:{
                Producto_id_Venta_id:{
                    Venta_id:idVenta,
                    Producto_id:idProducto
                }
            }
        })
    } catch (error) {
        
    }
    
}
