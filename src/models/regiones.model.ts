import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Region = Prisma.RegionesGetPayload<{}>

export type RegionCreate = Omit<Region,'id'>

export type RegionUpdate = Partial <RegionCreate>