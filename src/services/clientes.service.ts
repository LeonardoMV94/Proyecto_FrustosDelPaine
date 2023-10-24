import { Prisma } from '@prisma/client'
import { ClienteCreate, ClienteUpdate } from '../models/clientes.model'
import { db } from '../utils/db.config'


export async function getAllClientes() {
    try {
        const clientes = await db.clientes.findMany()
        return clientes
    } catch (error) {
        console.log("error al obtener clientes ", error)
        return []
    }

}

export async function getOneClienteById(id: number){
    try {
        const cliente = await db.clientes.findFirst({
            where: {
                id: id
            }
        })
        return cliente
    } catch (error) {
        console.log("error al obtener clientes ", error)
        return {}
    }
}

export async function createCliente(cliente: ClienteCreate) {
    try {
       return await db.clientes.create({
            data: cliente
        })

    } catch (error: any) {
        console.log("createCliente error: ", error)
        return {}
    }
}

export async function updateCliente(id: number, cliente: ClienteUpdate){
    try {
        const result = await db.clientes.update({
            data: cliente,
            select: {
                id: true,
                nombre: true,
                apellido: true
            },
            where: {
                id: id
            }
        })
        return result
    } catch (error) {
        console.log("Error Prisma: ", error)
        return {}
    }
}

export async function deleteCliente(id: number){
    try {
        const result = await db.clientes.delete({
            where: {
                id: id
            },
            select: {
                id: true,
                rut: true

            }
        })
        return result
    } catch (error: any) {
        console.log("Error Prisma: ", error)
        return {}
    }
}