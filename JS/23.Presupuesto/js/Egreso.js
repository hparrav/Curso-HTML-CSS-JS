class Egreso extends Dato{

    static contadorEgresos = 0;

    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id = ++Dato.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}