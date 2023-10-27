import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { EstadoPagoCreate,EstadoPAgoUpdate } from "../models/estado-pago.model";

export async function getAllEstadoPago() {
    try {
        const estadoPago = await db.estado_Pago.findMany()
        return estadoPago
    } catch (error) {
        console.log("Error al obtener metodos de pago ", error)
        return{}
    }
    
}

export async function getOneEstadoPagoById(id:number) {
    try {
        const result = await db.estado_Pago.findFirst({
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error al obtener un metood de pago ",error)
        return{}
    }
    
}

export async function createEstadoPago(estadoPago:EstadoPagoCreate) {
    try {
        return await db.estado_Pago.create({
            data:estadoPago
        })
    } catch (error) {
        console.log("Error al crear metodo pago ",error)
        return{}
        
    }    
}

export async function updateEstadoPago(id:number,estadoPago :EstadoPAgoUpdate) {
    try {
        const result = await db.estado_Pago.update({
            data:estadoPago,
            select:{
                id:true,
                estado:true
            },
            where:{
                id:id
            }
        })
    } catch (error) {
        console.log("Error de update Prisma ",error)
        return {}
    }    
}

export async function deleteEstadoPago(id:number) {
    try {
        const result = await db.estado_Pago.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
    } catch (error) {
        console.log("Error al delete de Estado Pago ",error)
        return {}
    }
    
}