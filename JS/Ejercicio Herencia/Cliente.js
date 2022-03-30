class Cliente extends Persona{
    
    static contadorCliente = 0;
    
    constructor(nombre,apellido,edad,fechaRegistro){
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
        super(nombre,apellido,edad);      
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    
    toString(){
        return super.toString() + " Id Cliente: " + this._idCliente + "- Fecha Registro: " + this._fechaRegistro;
    }
}