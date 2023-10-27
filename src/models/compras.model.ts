import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Compra = Prisma.ComprasGetPayload<{}>

export type CompraCreate = Compra

export type CompraUpate = Partial<CompraCreate>

