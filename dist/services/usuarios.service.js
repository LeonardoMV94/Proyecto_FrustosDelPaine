"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getOneUsuarioById = exports.getAllUsuarios = void 0;
const db_config_1 = require("../utils/db.config");
function getAllUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield db_config_1.db.usuarios.findMany({
                include: {
                    Tipos_Usuarios: true,
                    Colaboradores: true
                }
            });
            return usuarios;
        }
        catch (error) {
            console.log("Error al obtener Los Usuarios");
            return [];
        }
    });
}
exports.getAllUsuarios = getAllUsuarios;
function getOneUsuarioById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield db_config_1.db.usuarios.findFirst({
                where: {
                    id: id
                },
                include: {
                    Colaboradores: true
                }
            });
            return usuario;
        }
        catch (error) {
            console.log("Error al obtener Usuarios", error);
            return;
        }
    });
}
exports.getOneUsuarioById = getOneUsuarioById;
function createUsuario(usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.usuarios.create({
                data: usuario,
                select: {
                    id: true,
                }
            });
        }
        catch (error) {
            console.log("createUsuario error: ", error);
            return {};
        }
    });
}
exports.createUsuario = createUsuario;
function updateUsuario(id, usuario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.usuarios.update({
                data: usuario,
                select: {
                    id: true,
                    pass_encrypt: true,
                    ultimo_login: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Eror de prisma", error);
            return {};
        }
    });
}
exports.updateUsuario = updateUsuario;
function deleteUsuario(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.usuarios.delete({
                where: {
                    id: id
                },
                select: {
                    id: true,
                }
            });
        }
        catch (error) {
        }
    });
}
exports.deleteUsuario = deleteUsuario;
