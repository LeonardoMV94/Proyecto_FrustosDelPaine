import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export  type Colaborador = Prisma.ColaboradoresGetPayload<{}>

export type ColaboradorCrate = Colaborador

export type ColaboradorUpdate = Partial<ColaboradorCrate>
 