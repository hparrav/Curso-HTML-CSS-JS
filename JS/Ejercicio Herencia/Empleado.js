class Empleado extends Persona{
    
    static contadorEmpleado = 0;

    constructor(nombre,apellido,edad,sueldo){
        this._idEmpleado = ++Empleado.contadorEmpleado;
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} Id Empleado: ${this._idEmpleado}- Salario: ${this._sueldo}`;
    }
}