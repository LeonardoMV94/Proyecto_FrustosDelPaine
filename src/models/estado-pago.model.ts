import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type EstadoPago = Prisma.Estado_PagoGetPayload<{}>

export type EstadoPagoCreate = EstadoPago

export type EstadoPAgoUpdate = Partial<EstadoPagoCreate>
