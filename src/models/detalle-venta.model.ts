import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type DetalleVenta = Prisma.Detalle_ventaGetPayload<{}>

export type DetalleVentaCreate = DetalleVenta

export type DetalleVentaUpdate = Partial<DetalleVentaCreate>

