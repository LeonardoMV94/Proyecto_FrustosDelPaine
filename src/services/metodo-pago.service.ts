import {db} from '../utils/db.config'
import { MetodoPagoCreate , MetodoPagoUpdate} from '../models/metodo-pago.model'

export async function getAllMetodoPago(){
try {
    const metodosPagos = await db.metodo_Pago.findMany()
    const selectMetodos = metodosPagos.map((com)=> ({'value':com.id,'label':com.metodo}))
    return selectMetodos
} catch (error) {
    console.log("error al obtener metodo de pago", error)
    return[]
}
    
}

export async function getMetodosValueLabel(){

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

export async function createMetodoPago(metodo_pago :MetodoPagoCreate) {
    try {
         return await db.metodo_Pago.create({
           data: metodo_pago
         })
    } catch (error) {
        console.log("createMetodoPAgo Error", error)
        return []
    }
    
}


export async function updateMetodoPago(id:number,metodo_Pago:MetodoPagoUpdate) {
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

