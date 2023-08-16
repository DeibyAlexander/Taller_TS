"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Taller_js_1 = require("./Taller.js");
//! Via Getters
const ruta1 = new Taller_js_1.Ruta(1, "JAVASCIPT", "CAMPUSLAND FRONTERA", "VERMEN", "6 a.m - 2 p.m");
const ruta2 = new Taller_js_1.Ruta(2, "HTML & CSS", "CAMPUSLAND BUCARAMANGA", "Miguel", "6 a.m - 2 p.m");
const ruta3 = new Taller_js_1.Ruta(3, "REACT", "CAMPUSLAND BUCARAMANGA", "Vermen", "6 a.m - 2 p.m");
const ruta4 = new Taller_js_1.Ruta(4, "C++", "CAMPUSLAND FORNTERA", "Jholver", "6 a.m - 2 p.m");
const ruta5 = new Taller_js_1.Ruta(5, "PHP", "CAMPUSLAND BUCARAMANGA", "Vermen", "6 a.m - 2 p.m");
//! Via Setters
ruta1.ruta = "NodeJs";
console.log(ruta1, ruta2, ruta3, ruta4, ruta5);
