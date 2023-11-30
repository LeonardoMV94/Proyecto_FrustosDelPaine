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
exports.deleteColaborador = exports.updateColaborador = exports.createColaborador = exports.getOneColaboradorById = exports.getAllColabradores = void 0;
const db_config_1 = require("../utils/db.config");
function getAllColabradores() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const colaborador = yield db_config_1.db.colaboradores.findMany({
                include: {
                    Direcciones_de_Colaboradores: {
                        include: {
                            Direcciones: {
                                include: {
                                    Comunas: true
                                }
                            }
                        }
                    }
                }
            });
            return colaborador;
        }
        catch (error) {
            console.log("Error de obtener colaboradores ", error);
            return {};
        }
    });
}
exports.getAllColabradores = getAllColabradores;
function getOneColaboradorById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const colaborador = yield db_config_1.db.colaboradores.findFirst({
                where: {
                    id: id
                }
            });
            return colaborador;
        }
        catch (error) {
            console.log("Error al obtener Colaborador ", error);
            return {};
        }
    });
}
exports.getOneColaboradorById = getOneColaboradorById;
function createColaborador(colaborador) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.colaboradores.create({
                data: colaborador
            });
        }
        catch (error) {
            console.log("createColaborador en error ", error);
            return {};
        }
    });
}
exports.createColaborador = createColaborador;
function updateColaborador(id, colaborador) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.colaboradores.update({
                data: colaborador,
                select: {
                    id: true,
                    nombres: true,
                    apellidos: true,
                    correo: true,
                    celular: true
                },
                where: {
                    id: id
                }
            });
        }
        catch (error) {
            console.log("Error de Prisma  UpdateColaborador ", error);
            return {};
        }
    });
}
exports.updateColaborador = updateColaborador;
function deleteColaborador(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.colaboradores.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
            console.log("Error Prisma delete ", error);
        }
    });
}
exports.deleteColaborador = deleteColaborador;
