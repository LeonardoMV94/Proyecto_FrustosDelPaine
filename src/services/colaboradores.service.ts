import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { ColaboradorCrate,ColaboradorUpdate } from "../models/colaboradores.model";

export async function getAllColabradores() {
    try {
        const colaborador =  await db.colaboradores.findMany()
        return colaborador
    } catch (error) {
        console.log("Error de obtener colaboradores ", error)
        return{}
    }
    
}

export async function getOneColaboradorById(id:number) {
    try {
        const colaborador = await db.colaboradores.findFirst({
            where:{
                id:id
            }
        })
        return colaborador
    } catch (error) {
        console.log("Error al obtener Colaborador ",error)
        return{}
    }
    
}

export async function createColaborador(colaborador:ColaboradorCrate) {
    try {
        return await db.colaboradores.create({
            data:colaborador
        })
    } catch (error) {
        console.log("createColaborador en error ",error)
        return{}
        
    }
    
}

export async function updateColaborador(id:number,colaborador:ColaboradorUpdate) {
    try {
        const result = await db.colaboradores.update({
            data: colaborador,
            select:{
                id:true,
                nombres:true,
                apellidos:true,
                correo:true,
                celular:true
            },
            where:{
                id:id
            }
        })
    } catch (error) {
        console.log("Error de Prisma  UpdateColaborador ",error)
        return{}
        
    }
    
}

export async function deleteColaborador(id:number) {
    try {
        const result = await db.colaboradores.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
    } catch (error) {
       console.log("Error Prisma delete ",error) 
    }
    
}