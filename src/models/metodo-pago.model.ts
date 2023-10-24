import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type MetodoPago = Prisma.Metodo_PagoGetPayload<{}>

export type MetodoPagoCreate = Omit<Prisma.Metodo_PagoUncheckedCreateInput, 'id'>