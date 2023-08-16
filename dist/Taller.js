"use strict";
//!-----CLASES-----
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contrato = exports.Camper = exports.Nivel = exports.Ruta = exports.Centro = void 0;
//TODO-> -------------------CENTROS----------------------
class Centro {
    constructor(id, centro, departamento, ciudad, telefono) {
        this.id = id;
        this.centro = centro;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.telefono = telefono;
    }
    //! GETTERS
    get getCentro() {
        return this.centro;
    }
    get getDepartamento() {
        return this.departamento;
    }
    get getCiudad() {
        return this.ciudad;
    }
    get getTelefono() {
        return this.telefono;
    }
    //! SETTERS
    set setCentro(centro) {
        this.centro = centro;
    }
    set setDepartamento(departamento) {
        this.departamento = departamento;
    }
    set setCiudad(ciudad) {
        this.ciudad = ciudad;
    }
    set setTelefono(telefono) {
        this.telefono = telefono;
    }
}
exports.Centro = Centro;
//TODO-> -------------------RUTAS----------------------
class Ruta {
    constructor(id, ruta, centro, trainer, horario) {
        this.id = id;
        this.ruta = ruta;
        this.centro = centro;
        this.trainer = trainer;
        this.horario = horario;
    }
    //! GETTERS
    get getRuta() {
        return this.ruta;
    }
    get getCentro() {
        return this.centro;
    }
    get getTrainer() {
        return this.trainer;
    }
    get getHorario() {
        return this.horario;
    }
    //! SETTERS
    set setRuta(ruta) {
        this.ruta = ruta;
    }
    set setCentro(centro) {
        this.centro = centro;
    }
    set setTrainer(trainer) {
        this.trainer = trainer;
    }
    set setHorario(horario) {
        this.horario = horario;
    }
}
exports.Ruta = Ruta;
//TODO-> -------------------NIVELS----------------------
class Nivel {
    constructor(id, nivel, salon, ruta, duracion) {
        this.id = id;
        this.nivel = nivel;
        this.salon = salon;
        this.ruta = ruta;
        this.duracion = duracion;
    }
    //! GETTERS
    get getNivel() {
        return this.nivel;
    }
    get getSalon() {
        return this.salon;
    }
    get getRuta() {
        return this.ruta;
    }
    get getDuracion() {
        return this.duracion;
    }
    //! SETTERS
    set setNivel(nivel) {
        this.nivel = nivel;
    }
    set setSalon(salon) {
        this.salon = salon;
    }
    set setRuta(ruta) {
        this.ruta = ruta;
    }
    set setDuracion(duracion) {
        this.duracion = duracion;
    }
}
exports.Nivel = Nivel;
//TODO-> -------------------CAMPERS----------------------
class Camper {
    constructor(id, camper, email, promedio, tipoIdentificacion, nroIdentificacion) {
        this.id = id;
        this.camper = camper;
        this.email = email;
        this.promedio = promedio;
        this.tipoIdentificacion = tipoIdentificacion;
        this.nroIdentificacion = nroIdentificacion;
    }
}
exports.Camper = Camper;
class Contrato {
    constructor(id, empresa, moneda, salario, modalidad) {
        this.id = id;
        this.empresa = empresa;
        this.moneda = moneda;
        this.salario = salario;
        this.modalidad = modalidad;
    }
}
exports.Contrato = Contrato;
