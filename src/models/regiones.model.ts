import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Region = Prisma.RegionesGetPayload<{}>

export type RegionCreate = Region

export type RegionUpdate = Partial <RegionCreate>