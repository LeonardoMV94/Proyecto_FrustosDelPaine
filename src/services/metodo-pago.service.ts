import { Prisma } from '@prisma/client'
import {db} from '../utils/db.config'
import { MetodoPago, MetodoPagoCreate } from '../models/metodo-pago.model'

export async function getAllMetodoPago(){
try {
    const metodosPagos = await db.metodo_Pago.findMany()
    return metodosPagos
} catch (error) {
    console.log("error al obtener metodo de pago", error)
    return[]
}
    
}

export async function getOneMetodoPagoById(id:number){
    try {
        const metodoPago = await db.metodo_Pago.findFirst({
            where:{
                id:id
            }
        })
        return metodoPago
    } catch (error) {
        console.log("Error al obtener un metodo de pago",error)
        return[]
    }
}

export async function createMetodoPago(metodo_Pago :MetodoPago) {
    try {
         return await db.metodo_Pago.create({
            data:metodo_Pago
         })
    } catch (error) {
        console.log("createMetodoPAgo Error", error)
        return []
    }
    
}


export async function updateMetodoPago(id:number,metodo_Pago:MetodoPago) {
    try {
        const result = await db.metodo_Pago.update({
            data:metodo_Pago,
            select:{
                id:true,
                metodo:true
            },
            where:{
                id :id
            }
        })
        return result
    } catch (error) {
        console.log("Error Prisma : ",error)
        return{}
    }
    
}

export async function deleteMetodoPago(id:number) {
    try {
         const result = await db.metodo_Pago.delete({
            where:{
                id:id
            },
            select:{
                id :true,
                metodo: true
            }
         })
         return result
    } catch (error) {
        console.log("Error e Prisma ", error)
        return{}
    }
    
}

