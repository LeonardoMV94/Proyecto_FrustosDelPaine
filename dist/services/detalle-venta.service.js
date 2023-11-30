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
exports.deteleDetalleVenta = exports.updateDetallateVenta = exports.createDetalleVenta = exports.getOneDetalleVentaById = exports.getAllDetalleVenta = void 0;
const db_config_1 = require("../utils/db.config");
function getAllDetalleVenta() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const detalleVenta = yield db_config_1.db.detalle_venta.findMany({
                include: {
                    Productos: true,
                    Venta: true
                }
            });
            return detalleVenta;
        }
        catch (error) {
            console.log("Error en obtener los detalles venta ", error);
            return {};
        }
    });
}
exports.getAllDetalleVenta = getAllDetalleVenta;
function getOneDetalleVentaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const detalleVenta = yield db_config_1.db.detalle_venta.findFirst({
                where: {
                    Venta_id: id,
                    Producto_id: id
                },
            });
            return detalleVenta;
        }
        catch (error) {
            console.log("Error al obtener un detalle venta ", error);
            return {};
        }
    });
}
exports.getOneDetalleVentaById = getOneDetalleVentaById;
function createDetalleVenta(detalleVenta) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_config_1.db.detalle_venta.create({
                data: detalleVenta
            });
        }
        catch (error) {
            console.log("Error al crear detalle venta");
            return {};
        }
    });
}
exports.createDetalleVenta = createDetalleVenta;
function updateDetallateVenta(idVenta, idProducto, detalleVenta) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const upateDetalleVenta = yield db_config_1.db.detalle_venta.updateMany({
                where: {
                    Venta_id: idVenta,
                    Producto_id: idProducto,
                },
                data: detalleVenta,
            });
            return upateDetalleVenta;
        }
        catch (error) {
            console.log("Error en Prisma Update", error);
            return {};
        }
    });
}
exports.updateDetallateVenta = updateDetallateVenta;
function deteleDetalleVenta(idVenta, idProducto) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deteleDetalleVenta = yield db_config_1.db.detalle_venta.delete({
                where: {
                    Producto_id_Venta_id: {
                        Venta_id: idVenta,
                        Producto_id: idProducto
                    }
                }
            });
        }
        catch (error) {
        }
    });
}
exports.deteleDetalleVenta = deteleDetalleVenta;
