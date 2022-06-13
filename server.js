"use strict";
exports.__esModule = true;
var exerc_1 = require("./exerc");
var express = require('express');
var path = require('path');
var app = express(); // Essa alteração parou o erro "esModuleInterop"
function filePath(name) {
    var pokePath;
    pokePath = __dirname + "/img/".concat(name) + ".jpg";
    return pokePath;
}
console.log(__dirname + "/img/bulbasaur.jpg");
app.get('/', function (req, res) {
    res.send("Home");
});
app.get('/001', function (req, res) {
    res.sendFile(filePath("bulbasaur"));
    //res.send(Bulbasaur);
});
app.get('/002', function (req, res) {
    res.sendFile(filePath("ivysaur"));
    res.send(exerc_1.Ivysaur);
});
app.get('/003', function (req, res) {
    res.sendFile(filePath("venusaur"));
    res.send(exerc_1.Venusaur);
});
app.listen(5000, function () {
    console.log("Rodando na porta 5000");
});
