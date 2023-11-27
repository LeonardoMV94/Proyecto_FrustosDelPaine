import { PrismaClient, Prisma } from "@prisma/client";

export type TipoUsuario = Prisma.UsuariosGetPayload<{}>

export type TipoUsuarioCreate = Prisma.Tipos_UsuariosUncheckedCreateWithoutUsuariosInput

export type TipoUsuarioUpdate = Partial<TipoUsuarioCreate>
