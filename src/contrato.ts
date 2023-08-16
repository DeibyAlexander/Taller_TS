import { Contrato } from "./Taller.js";

//! Via Getters

const contrato1 = new Contrato(1,"Bacolombia","DOLAR",20.000,"Remota")
const contrato2 = new Contrato(2,"Nequi","EURO",200.000,"Presencial")
const contrato3 = new Contrato(3,"Amazon","EURO",70.000,"Remota")
const contrato4 = new Contrato(4,"Cine Colombia","DOLAR",20.000,"Presencial")
const contrato5 = new Contrato(5,"Twitter","EURO",300.000,"Remota")



//! Via Setters

contrato1.empresa= "Davivienda"

console.log(contrato1,contrato2, contrato3, contrato4, contrato5);
