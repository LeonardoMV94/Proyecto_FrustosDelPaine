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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const ColaboradoresServices = __importStar(require("../services/colaboradores.service"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colaboradores = yield ColaboradoresServices.getAllColabradores();
        response.status(200).json(colaboradores);
    }
    catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 });
    }
}));
router.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    try {
        const colaboradores = yield ColaboradoresServices.getOneColaboradorById(id);
        response.status(200).json(colaboradores);
    }
    catch (error) {
        response.status(500).json({ error, message: " error de servidor ", code: 500 });
    }
}));
router.put("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    const colaboradorBody = request.body;
    try {
        const result = yield ColaboradoresServices.updateColaborador(id, colaboradorBody);
        response.status(200).json(result);
    }
    catch (error) {
        response.status(500).json({ error, message: "Error de servidor ", code: 500 });
    }
}));
router.post("/", (request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colaboradorBody = request.body;
        const result = yield ColaboradoresServices.createColaborador(colaboradorBody);
        return express_1.response.status(201).json(result);
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            return express_1.response.status(500).json({
                mesaje: "No se pudo crear el colaborador",
                code: error.code,
                meta: error.meta,
                error: error.message
            });
        }
        return express_1.response.status(500).json({
            mensaje: "No se pudo eliminar el colaborador",
            code: error.code,
            meta: error.meta,
            error: error.message
        });
    }
}));
router.delete("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id, 0);
    try {
        const result = yield ColaboradoresServices.deleteColaborador(id);
        response.status(204).json({ result });
    }
    catch (error) {
        response.status(500).json({ error, message: "error de servidor ", code: 500 });
    }
}));
