"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Taller_js_1 = require("./Taller.js");
//! Via Getters
const centro1 = new Taller_js_1.Centro(1, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro2 = new Taller_js_1.Centro(2, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro3 = new Taller_js_1.Centro(3, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro4 = new Taller_js_1.Centro(4, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
const centro5 = new Taller_js_1.Centro(5, "CAMPUSLAND BUCARAMANGA", "Santander", "Bucaramanga", 3123678534);
//! Via Setters
centro1.centro = "CAMPUSLANDS FRONTERA";
console.log(centro1, centro2, centro3, centro4, centro5);
