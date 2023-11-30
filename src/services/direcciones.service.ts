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
        return await db.direcciones.create({
            data: direccion
        })
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

    }

}