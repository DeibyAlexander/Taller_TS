

//!-----CLASES-----



//TODO-> -------------------CENTROS----------------------

export class Centro{
    constructor(
        public readonly id:number,
        public centro:String,
        public departamento:String,
        public ciudad:String,
        public telefono:number
    ){}


    //! GETTERS

    get getCentro():String{
        return this.centro
    }
    
    get getDepartamento() : String {
        return this.departamento
    }

    get getCiudad():String{
        return this.ciudad
    }
    get getTelefono():number{
        return this.telefono
    }

    //! SETTERS
    
    set setCentro(centro:String){
        this.centro = centro
    }

    set setDepartamento(departamento:String){
        this.departamento = departamento
    }

    set setCiudad(ciudad:String){
        this.ciudad = ciudad
    }
    
    set setTelefono(telefono:number){
        this.telefono = telefono
    }


}





//TODO-> -------------------RUTAS----------------------

export class Ruta{
    constructor(
        public readonly id:number,
        public ruta:String,
        public centro:String,
        public trainer:String,
        public horario:String
    ){}

     //! GETTERS

     get getRuta():String{
        return this.ruta
    }
    
    get getCentro() : String {
        return this.centro
    }

    get getTrainer():String{
        return this.trainer
    }
    get getHorario():String{
        return this.horario
    }

    //! SETTERS
    

    set setRuta(ruta:String){
        this.ruta = ruta
    }

    set setCentro(centro:String){
        this.centro = centro
    }

    set setTrainer(trainer:String){
        this.trainer = trainer
    }
    
    set setHorario(horario:String){
        this.horario = horario
    }


}







//TODO-> -------------------NIVELS----------------------

export class Nivel{
    constructor(
        public readonly id:number,
        public nivel:String,
        public salon:String,
        public ruta:String,
        public duracion:String
    ){}

         //! GETTERS

         get getNivel():String{
            return this.nivel
        }
        
        get getSalon() : String {
            return this.salon
        }
    
        get getRuta():String{
            return this.ruta
        }
        get getDuracion():String{
            return this.duracion
        }
    
        //! SETTERS
        
    
        set setNivel(nivel:String){
            this.nivel = nivel
        }
    
        set setSalon(salon:String){
            this.salon = salon
        }
    
        set setRuta(ruta:String){
            this.ruta = ruta
        }
        
        set setDuracion(duracion:String){
            this.duracion = duracion
        }

}





//TODO-> -------------------CAMPERS----------------------

export class Camper{
    constructor(
        public readonly id:number,
        public camper:String,
        public email:String,
        public promedio:number,
        public tipoIdentificacion:String,
        public nroIdentificacion:number
    ){}

                 //! GETTERS

                 get getCamper():String{
                    return this.camper
                }
                
                get getEmail() : String {
                    return this.email
                }
            
                get getPromedio():number{
                    return this.promedio
                }
                get getTipoIdentificacion():String{
                    return this.tipoIdentificacion
                }
                get getNroIdentificacion():number{
                    return this.nroIdentificacion
                }
            
                //! SETTERS
                
            
                set setCamper(camper:String){
                    this.camper = camper
                }
            
                set setEmail(email:String){
                    this.email = email
                }
            
                set setPromedio(promedio:number){
                    this.promedio = promedio
                }
                
                set setTipoIdentificacion(tipoIdentificacion:String){
                    this.tipoIdentificacion = tipoIdentificacion
                }

                set setNroIdentificacion(nroIdentificacion:number){
                    this.nroIdentificacion = nroIdentificacion
                }
}




//TODO-> -------------------CONTRATOS----------------------

export class Contrato{
    constructor(
        public readonly id:number,
        public empresa:String,
        public moneda: String,
        public salario:number,
        public modalidad:String
    ){}

             //! GETTERS

             get getEmpresa():String{
                return this.empresa
            }
            
            get getMoneda() : String {
                return this.moneda
            }
        
            get getSalario():number{
                return this.salario
            }
            get getModalidad():String{
                return this.modalidad
            }
        
            //! SETTERS
            
        
            set setEmpresa(empresa:String){
                this.empresa = empresa
            }
        
            set setMoneda(moneda:String){
                this.moneda = moneda
            }
        
            set setSalario(salario:number){
                this.salario = salario
            }
            
            set setModalidad(modalidad:String){
                this.modalidad = modalidad
            }
}
