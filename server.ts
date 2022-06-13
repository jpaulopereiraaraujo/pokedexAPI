import {Request, Response} from 'express';
import {Bulbasaur, Ivysaur, Venusaur} from "./exerc";
const express = require('express')
const path = require('path');
const app = express();// Essa alteração parou o erro "esModuleInterop"

function filePath(name: string) {
    let pokePath;
    pokePath = __dirname+`/img/${name}`+".jpg";
    return pokePath;
}

console.log(__dirname+"/img/bulbasaur.jpg")

app.get('/', (req: Request, res: Response) => {
  res.send("Home");
});

app.get('/001', (req: Request, res: Response) => {
    res.sendFile(filePath("bulbasaur"));
    res.send(Bulbasaur);
  });

app.get('/002', (req: Request, res: Response) => {
    res.sendFile(filePath("ivysaur"))
    res.send(Ivysaur);
});

app.get('/003', (req: Request, res: Response) => {
    res.sendFile(filePath("venusaur"))
    res.send(Venusaur);
});

 
app.listen(5000, () => {
    console.log("Rodando na porta 5000")
});

