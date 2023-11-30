"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./controllers/index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = +process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, index_1.default)(app);
app.listen(port, () => {
    console.log(`[Server]: Listen in http://localhost:${port}/api/v1/test`);
});
