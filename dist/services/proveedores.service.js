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
exports.deleteProveedor = exports.updateProveedor = exports.createProveedor = exports.getOneProveedorById = exports.getAllProveedores = void 0;
const db_config_1 = require("../utils/db.config");
function getAllProveedores() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const proveedor = yield db_config_1.db.proveedores.findMany({
                include: {
                    Direcciones: true
                }
            });
            return proveedor;
        }
        catch (error) {
            console.log("Error al obtener proveedores ", error);
            return [];
        }
    });
}
exports.getAllProveedores = getAllProveedores;
function getOneProveedorById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const proveedor = yield db_config_1.db.proveedores.findFirst({
                where: {
                    id: id
                }
            });
            return proveedor;
        }
        catch (error) {
            console.log("Error al obtener un proveedor ", error);
            return {};
        }
    });
}
exports.getOneProveedorById = getOneProveedorById;
function createProveedor(proveedor) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.proveedores.create({
                data: proveedor
            });
        }
        catch (error) {
            console.log("Error al crear el proveedor ", error);
            return {};
        }
    });
}
exports.createProveedor = createProveedor;
function updateProveedor(id, proveedor) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.proveedores.update({
                data: proveedor,
                select: {
                    id: true,
                    rut: true,
                    giro: true,
                    nombre: true,
                    telefono: true,
                    correo: true,
                    pagina_web: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al update , Prisma ", error);
            return {};
        }
    });
}
exports.updateProveedor = updateProveedor;
function deleteProveedor(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.proveedores.delete({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    rut: true
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error Prisma delete ", error);
            return {};
        }
    });
}
exports.deleteProveedor = deleteProveedor;
