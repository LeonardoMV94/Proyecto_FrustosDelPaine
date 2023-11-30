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
exports.deleteTipoUsuario = exports.updateTipoUsuario = exports.createTipoUsuario = exports.getOneTipoUsuarioById = exports.getAllTipoUsuario = void 0;
const db_config_1 = require("../utils/db.config");
function getAllTipoUsuario() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tipoUsuario = yield db_config_1.db.tipos_Usuarios.findMany();
            return tipoUsuario;
        }
        catch (error) {
            console.log("error al obtener los tipos de Usuarios ", error);
            return {};
        }
    });
}
exports.getAllTipoUsuario = getAllTipoUsuario;
function getOneTipoUsuarioById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tipoUsuario = yield db_config_1.db.tipos_Usuarios.findFirst({
                where: {
                    id: id
                }
            });
            return tipoUsuario;
        }
        catch (error) {
            console.log("error al obtener el tipo de usuario", error);
            return {};
        }
    });
}
exports.getOneTipoUsuarioById = getOneTipoUsuarioById;
function createTipoUsuario(tipoUsuario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.tipos_Usuarios.create({
                data: tipoUsuario
            });
        }
        catch (error) {
            console.log("create Tipo de Usuario ", error);
            return {};
        }
    });
}
exports.createTipoUsuario = createTipoUsuario;
function updateTipoUsuario(id, tipoUsuario) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.tipos_Usuarios.update({
                data: tipoUsuario,
                select: {
                    id: true,
                    tipo_usuario: true
                },
                where: {
                    id: id
                }
            });
        }
        catch (error) {
            console.log("Error del prisma ", error);
            return {};
        }
    });
}
exports.updateTipoUsuario = updateTipoUsuario;
function deleteTipoUsuario(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.tipos_Usuarios.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
            console.log("Error al eliminar el tipoUsuario ", error);
        }
    });
}
exports.deleteTipoUsuario = deleteTipoUsuario;
