import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { tipoUsuario, tipoUsuarioUpdate } from "../models/tipoUsuarios.model";

export async function getAllTipoUsuario() {
    try {
        const tipoUsuario = await db.tipos_Usuarios.findMany()
        return tipoUsuario
    } catch (error) {
        console.log("error al obtener los tipos de Usuarios ", error)
        return {}
        
    }
   
}

export async function  getOneTipoUsuarioById(id:number) {
    try {
        const tipoUsuario = await db.tipos_Usuarios.findFirst({
            where: {
                id:id
            }
        })
        return tipoUsuario
    } catch (error) {
       console.log("error al obtener el tipo de usuario", error)
        return{}        
        
    }   
}

export async function  createTipoUsuario(tipoUsuario: tipoUsuario) {
    try {
        return await db.tipos_Usuarios.create({
            data: tipoUsuario
        })
    } catch (error) {
        console.log("create Tipo de Usuario ",error)
        return {}
    }
    
}

export async function updateTipoUsuario(id:number,tipoUsuario:tipoUsuarioUpdate) {
    try {
        const result = await db.tipos_Usuarios.update({
            data:tipoUsuario,
            select:{
                id:true,
                tipo_usuario:true
            },
            where: {
                id:id
            }
        })
    } catch (error) {
        console.log("Error del prisma ",error)
        return{}
    }
    
}

export async function deleteTipoUsuario(id:number) {
    try {
        const result = await db.tipos_Usuarios.delete({
            where:{
                id:id
            },
            select:{
                id:true
            }
        })
        
    } catch (error) {
        console.log("Error al eliminar el tipoUsuario ",error)
    }
    

}

