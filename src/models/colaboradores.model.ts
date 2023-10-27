import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export  type Colaborador = Prisma.ColaboradoresGetPayload<{}>

export type ColaboradorCrate = Omit<Colaborador,'id'>

export type ColaboradorUpdate = Partial<ColaboradorCrate>
 