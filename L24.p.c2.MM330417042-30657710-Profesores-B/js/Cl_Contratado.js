import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre,bono,horas ){
        super(nombre,bono);
        this.horas = horas;
    }
    sueldoHorasContratado() {	
	return this.horas * 10
}


sueldoTotal() {
return this.bono + this.sueldoHorasContratado()
}
}