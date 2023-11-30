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
exports.deleteDireccion = exports.updateDirecciones = exports.createDireccion = exports.getOneDireccionById = exports.getAllDirecciones = void 0;
const db_config_1 = require("../utils/db.config");
function getAllDirecciones() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const direcciones = yield db_config_1.db.direcciones.findMany({
                include: {
                    Comunas: {
                        include: {
                            Provincias: {
                                include: {
                                    Regiones: true
                                }
                            }
                        }
                    }
                }
            });
            return direcciones;
        }
        catch (error) {
            console.log("Error al Obtener Direcciones ", error);
            return {};
        }
    });
}
exports.getAllDirecciones = getAllDirecciones;
function getOneDireccionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const direcciones = yield db_config_1.db.direcciones.findFirst({
                where: {
                    id: id
                }
            });
            return direcciones;
        }
        catch (error) {
            console.log("Error al obtener direcciones ", error);
            return {};
        }
    });
}
exports.getOneDireccionById = getOneDireccionById;
function createDireccion(direccion) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.direcciones.create({
                data: direccion
            });
        }
        catch (error) {
            console.log("Error al crera direccion ", error);
            return {};
        }
    });
}
exports.createDireccion = createDireccion;
function updateDirecciones(id, direccion) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.direcciones.update({
                data: direccion,
                select: {
                    id: true,
                    calle: true,
                    numero_calle: true,
                    numero_departamento: true,
                    Comunas_id: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error en el update, Prisma ", error);
            return {};
        }
    });
}
exports.updateDirecciones = updateDirecciones;
function deleteDireccion(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.direcciones.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
        }
    });
}
exports.deleteDireccion = deleteDireccion;
