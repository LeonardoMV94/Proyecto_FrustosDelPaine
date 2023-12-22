import { db } from "../utils/db.config";
import { DetallePagoCreate,DetallePagoUpdate } from "../models/detalle-pago.model";

export async function getAllDetallePago() {
    try {
        const detallePAgo =await db.detalle_pago.findMany({
            include:{
                Metodo_Pago:true
            }
        })
        return detallePAgo
    } catch (error) {
        console.log("Error al obtener los detalles pago ",error)
        return{}
    }
    
}

export async function getOneDetallePagoBtId(id:number) {
    try {
        const detallePago = await db.detalle_pago.findFirst({
            where:{
                id:id
            }
        })
        return detallePago
    } catch (error) {
        console.log("Eror al obtene un detalle pago ", error)
        return{}
    }
    
}

export async function createDetallePAgo(detallePAgo:DetallePagoCreate) {
    try {
       return await db.detalle_pago.create({
        data:detallePAgo
       })
    } catch (error) {
        console.log("Error al crear detalle pago ",error)
        return{}
    }    
}

export async function upateDetallePAgo(id:number,detallePago :DetallePagoUpdate) {
    try {
        const result = await db.detalle_pago.update({
            data:detallePago,
            select:{
                id:true,
                monto_pagado:true,
                fecha:true
            },
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error al actualizar, Prisma ",error)
        return{}
    }
    
}

export async function deleteDetallePago(id:number) {
        try {
            const result = await db.detalle_pago.delete({
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