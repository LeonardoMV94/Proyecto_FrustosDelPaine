import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Proveedor = Prisma.ProveedoresGetPayload<{}>

export type ProveedorCreate = Proveedor

export type ProveedorUpdate = Partial<ProveedorCreate>



