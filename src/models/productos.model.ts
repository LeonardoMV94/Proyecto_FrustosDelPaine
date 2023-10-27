import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Producto = Prisma.ProductosGetPayload<{}>

export type ProductoCreate = Producto

export type ProductoUpdate = Partial<ProductoCreate>
