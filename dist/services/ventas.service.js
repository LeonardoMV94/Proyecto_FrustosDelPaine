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
exports.deleteVenta = exports.updateVenta = exports.createVenta = exports.getOneVentaById = exports.getAllVentas = void 0;
const db_config_1 = require("../utils/db.config");
function getAllVentas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ventas = yield db_config_1.db.venta.findMany({
                include: {
                    Usuarios: true,
                    Clientes: true,
                    Detalle_pago_en_Venta: {
                        include: {
                            Detalle_pago: {
                                include: {
                                    Metodo_Pago: true
                                }
                            }
                        }
                    }
                }
            });
            return ventas;
        }
        catch (error) {
            console.log("Erorr al obtener ventas", error);
            return [];
        }
    });
}
exports.getAllVentas = getAllVentas;
function getOneVentaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.venta.findFirst({
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error al obtener una venta ", error);
            return {};
        }
    });
}
exports.getOneVentaById = getOneVentaById;
function createVenta(venta) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.venta.create({
                data: venta
            });
        }
        catch (error) {
            console.log("Error de Prisma Create ", error);
            return {};
        }
    });
}
exports.createVenta = createVenta;
function updateVenta(id, venta) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.venta.update({
                data: venta,
                select: {
                    id: true,
                    neto: true,
                    iva: true,
                    total: true,
                    fecha: true
                },
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (error) {
            console.log("Error de prisma update ", error);
            return {};
        }
    });
}
exports.updateVenta = updateVenta;
function deleteVenta(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_config_1.db.venta.delete({
                where: {
                    id: id
                },
                select: {
                    id: true
                }
            });
        }
        catch (error) {
            console.log("Error al delete Prisma ", error);
            return {};
        }
    });
}
exports.deleteVenta = deleteVenta;
