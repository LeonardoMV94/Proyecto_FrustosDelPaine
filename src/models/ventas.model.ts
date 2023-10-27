import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Venta = Prisma.VentaGetPayload<{}>

export type VentaCreate = Venta

export type VentaUpdate = Partial<VentaCreate>

