import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { DireccionCreate, DireccionUpdate } from "../models/direcciones.model";

export async function getAllDirecciones() {
    try {
        const direcciones = await db.direcciones.findMany()
        return direcciones
    } catch (error) {
        console.log("Error al Obtener Direcciones ",error)
        return{}
    }
    
}

export async function getOneDireccionById(id:number) {
    try {
        const direcciones =await db.direcciones.findFirst({
            where:{
                id:id
            }
        })
        return direcciones
    } catch (error) {
        console.log("Error al obtener direcciones ", error)
        return{}
    }
    
}

