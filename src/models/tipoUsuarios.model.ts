import { PrismaClient, Prisma } from "@prisma/client";
import { type } from "os";

const prisma = new PrismaClient()

export type tipoUsuario = Prisma.UsuariosGetPayload<{}>

export type tipoUsuarioCreate = tipoUsuario

export type tipoUsuarioUpdate = Partial<tipoUsuarioCreate>
