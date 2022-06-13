"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exerc_1 = require("./exerc");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send("Home");
});
app.get('/lojaA', (req, res) => {
    res.send(exerc_1.lojaA);
});
app.get('/lojaB', (req, res) => {
    res.send(exerc_1.lojaB);
});
app.get('/lojaC', (req, res) => {
    res.send(exerc_1.lojaC);
});
app.post('/user', (req, res) => {
    res.send("Página de usuário");
});
app.listen(5000, () => {
    console.log("Rodando na porta 5000");
});
