import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type DetalleCompra = Prisma.Detalle_ComprasGetPayload<{}>

export type DetalleCompraCreate = DetalleCompra

export type DetalleCompraUpdate = Partial<DetalleCompraCreate>

