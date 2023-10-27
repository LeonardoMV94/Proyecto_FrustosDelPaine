import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type DetallePago = Prisma.Detalle_pagoGetPayload<{}>

export type DetallePagoCreate = DetallePago

export type DetallePagoUpdate = Partial<DetallePago>
