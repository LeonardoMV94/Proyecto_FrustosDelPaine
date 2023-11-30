"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const detallePagoServices = __importStar(require("../services/detalle-pago.service"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const detallePago = yield detallePagoServices.getAllDetallePago();
        response.status(200).json(detallePago);
    }
    catch (error) {
        response.status(500).json({ error, message: "error del servidor ", code: 500 });
    }
}));
router.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    try {
        const detallePago = yield detallePagoServices.getOneDetallePagoBtId(id);
        response.status(200).json(detallePago);
    }
    catch (error) {
        response.status(500).json({ error, message: "error del servidor ", code: 500 });
    }
}));
router.put("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    const detallePagoBody = request.body;
    try {
        const result = yield detallePagoServices.upateDetallePAgo(id, detallePagoBody);
        response.status(200).json(result);
    }
    catch (error) {
        response.status(500).json({ error, message: "error del servidor ", code: 500 });
    }
}));
router.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const detallePagoBody = request.body;
        const result = yield detallePagoServices.createDetallePAgo(detallePagoBody);
        return response.status(201).json(result);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            return response.status(500).json({
                mesaje: "No se puede crear detalle Pago",
                code: error.code,
                meta: error.meta,
                error: error.message
            });
        }
        return response.status(500).json({
            mensaje: "No se a podido eliminar ",
            code: error.code,
            meta: error.meta,
            error: error.message
        });
    }
}));
router.delete("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    try {
        const result = yield detallePagoServices.deleteDetallePago(id);
        response.status(204).json(result);
    }
    catch (error) {
        response.status(500).json({ error, message: "error del servidor ", code: 500 });
    }
}));
exports.default = router;
