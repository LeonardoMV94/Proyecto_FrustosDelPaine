import {PrismaClient, Prisma} from '@prisma/client'

const prisma = new PrismaClient()

export type Comuna = Prisma.ComunasGetPayload<{}>

