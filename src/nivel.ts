import { Nivel } from "./Taller.js";

//! Via Getters

const nivel1 = new Nivel(1,"INTERMEDIO","ARETEMIS","JAVASCRIPT","3 meses")
const nivel2 = new Nivel(2,"AVANZADO","APOLO","C++","55 dias")
const nivel3 = new Nivel(3,"BASICO","SPUTNIK","PHP","20 dias")
const nivel4 = new Nivel(4,"PRACTICO","ARTEMIS","REACT","2 semanas")
const nivel5 = new Nivel(5,"AVANZADO","APOLO","NESTJS","1 mes")



//! Via Setters

nivel1.nivel= "Avanzado"

console.log(nivel1, nivel2, nivel3, nivel4, nivel5);