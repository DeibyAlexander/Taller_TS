"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Taller_js_1 = require("./Taller.js");
//! Via Getters
const contrato1 = new Taller_js_1.Contrato(1, "Bacolombia", "DOLAR", 20.000, "Remota");
const contrato2 = new Taller_js_1.Contrato(2, "Nequi", "EURO", 200.000, "Presencial");
const contrato3 = new Taller_js_1.Contrato(3, "Amazon", "EURO", 70.000, "Remota");
const contrato4 = new Taller_js_1.Contrato(4, "Cine Colombia", "DOLAR", 20.000, "Presencial");
const contrato5 = new Taller_js_1.Contrato(5, "Twitter", "EURO", 300.000, "Remota");
//! Via Setters
contrato1.empresa = "CAMPUSLANDS FRONTERA";
console.log(contrato1, contrato2, contrato3, contrato4, contrato5);
