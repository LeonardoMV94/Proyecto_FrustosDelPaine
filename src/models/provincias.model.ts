import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Provincia = Prisma.ProvinciasGetPayload<{}>

export type ProvinciaCreate = Provincia

export type ProvinciaUpdate =Partial<ProvinciaCreate>

