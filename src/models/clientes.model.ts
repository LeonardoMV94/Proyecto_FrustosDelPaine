import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Cliente = Prisma.ClientesGetPayload<{}>

export type ClienteCreate = Omit<Cliente, 'id'>

export type ClienteUpdate = Partial<ClienteCreate>
