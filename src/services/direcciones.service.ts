import { Prisma } from "@prisma/client";
import { db } from "../utils/db.config";
import { DireccionCreate, DireccionUpdate, Direccion } from "../models/direcciones.model";

export async function getAllDirecciones() {
    try {
        const direcciones = await db.direcciones.findMany({
            include: {
                Comunas: {
                    include: {
                        Provincias: {
                            include: {
                                Regiones: true
                            }
                        }
                    }
                }
            }
        })
        return direcciones
    } catch (error) {
        console.log("Error al Obtener Direcciones ", error)
        return {}
    }

}

export async function getAllComunas() {
    try {
        const comunas = await db.comunas.findMany()
        const selectComunas = comunas.map((com) => ({ 'value': com.id_comuna, 'label': com.comuna}) )
        return selectComunas
    } catch (error) {
        console.log("Error al Obtener comunas ", error)
        return {}
    }
}

export async function getComunasNested(id: number) {
    try {
        const comunas = await db.comunas.findMany({
            where: {
                provincia_id: id
            }
        })
        return comunas
    } catch (error) {
        console.log("Error al Obtener comunas ", error)
        return {}
    }
}

export async function getOneProvincia(id: number) {
    try {
        const provincia = await db.provincias.findFirst({
            where: {
                region_id: id
            }
        })
        return provincia
    } catch (error) {
        console.log("Error al Obtener provincias ", error)
        return {}
    }
}

export async function getRegiones() {
    try {
        const region = await db.regiones.findMany()
        return region
    } catch (error) {
        console.log("Error al Obtener regiones ", error)
        return {}
    }
}

export async function getOneDireccionById(id: number) {
    try {
        const direcciones = await db.direcciones.findFirst({
            where: {
                id: id
            }
        })
        return direcciones
    } catch (error) {
        console.log("Error al obtener direcciones ", error)
        return {}
    }

}

export async function createDireccion(direccion: DireccionCreate) {
    try {
        const dato =  await db.direcciones.create({
            data: direccion,
            select: {
                id: true
            }
        })
        return dato
    } catch (error) {
        console.log("Error al crera direccion ", error)
        return {}
    }

}

export async function updateDirecciones(id: number, direccion: DireccionUpdate) {
    try {
        const result = await db.direcciones.update({
            data: direccion,
            select: {
                id: true,
                calle: true,
                numero_calle: true,
                numero_departamento: true,
                Comunas_id: true
            },
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.log("Error en el update, Prisma ", error)
        return {}
    }

}

export async function insertDireccionesDeColaborador(body: {Colaboradores_id:number,Direcciones_id:number}){
    try {
        const response = await db.direcciones_de_Colaboradores.create({
            data:body,
            select:{
                Colaboradores_id:true,
                Direcciones_id:true
            }
        })
        return response
    } catch (error) {
        console.log("Error en el create, Prisma ", error)
        return {}
    }

}

export async function insertDireccionesDeClientes(body: { Clientes_id: number, Direcciones_id: number}) {
    try {
        const response = await db.direcciones_de_Clientes.create({
            data: body,
            select: {
                Clientes_id: true,
                Direcciones_id: true
            }
        })
        return response
    } catch (error) {
        console.log("Error en el create, Prisma ", error)
        return {}
    }
}

export async function deleteDireccion(id: number) {
    try {
        const result = await db.direcciones.delete({
            where: {
                id: id
            },
            select: {
                id: true
            }
        })
    } catch (error) {
        console.log("Error en el delete, Prisma ", error)
        return {}
    }

}