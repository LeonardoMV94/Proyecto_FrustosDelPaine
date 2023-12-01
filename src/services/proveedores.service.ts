import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { ProveedorCreate,ProveedorUpdate } from "../models/proveedores.model";

export async function getAllProveedores() {
    try {
        const proveedor = await db.proveedores.findMany({
           include:{
            Direcciones:{
                include:{
                    Comunas:{
                        include:{
                            Provincias:{
                                include:{
                                    Regiones:true
                                }
                            }
                        }
                    }
                }
            }
           }
        
        })
        return proveedor
    } catch (error) {
        console.log("Error al obtener proveedores ",error)
        return []
    }
    
}

export async function getOneProveedorById(id:number) {
    try {
        const proveedor = await db.proveedores.findFirst({
            where:{
                id:id
                
            }

        })
        return proveedor
    } catch (error) {
        console.log("Error al obtener un proveedor ",error)
        return{}
    }

}

export async function createProveedor(proveedor:ProveedorCreate) {
    try {
        return await db.proveedores.create({
            data:proveedor
        
        })
    } catch (error) {
        console.log("Error al crear el proveedor ",error)
        return{}
    }
    
}

export async function updateProveedor(id:number,proveedor:ProveedorUpdate) {
    try {
        const result = await db.proveedores.update({
            data:proveedor,
            select:{
                id:true,
                rut:true,
                giro:true,
                nombre:true,
                telefono:true,
                correo:true,
                pagina_web:true
            },
            where:{
                id:id
            }
        })
        return result
    } catch (error) {
        console.log("Error al update , Prisma ",error)
        return{}
    }
    
}

export async function deleteProveedor(id:number) {
    try {
        const result = await db.proveedores.delete({
            where:{
                id:id
            },
            select:{
                id:true,
                rut:true
            }
        })
        return result
    } catch (error) {
        console.log("Error Prisma delete ",error)
        return{}
    }
    
}

