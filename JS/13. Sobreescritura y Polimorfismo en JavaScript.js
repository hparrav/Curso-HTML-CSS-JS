/* ------------------------------------------------- Sobreescritura en JavaScript ---------------------------------------------------- */
// La sobreescritura hace referencia a la modificación de un metodo heradado por una clase hija de su clase padre, realizando la modificación desde la misma clase hija.
// Para la sobreescritura es neceasario que exista una clase padre y una clase hija, osea que debe existir el concepto de herencia.

class Empleado{ //Se crea una clase padre
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: ${this._nombre}, Sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado{ //Creamos una clase hija de Empleado, el cual heredara sus atributos y metodos
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo); //Hacemos la llamada al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //El metodo de obtenerDetalle es heredado por la clase hija de su clase padre, y en este caso muestra solamente el nombre y el sueldo definidos para el objeto
    //Para poder sobresescribir un metodo heredado de la clase padre, se debe hacer exactamente con el mismo nombre.
    obtenerDetalles(){ //Sobrescribimos el metodo heredado de la clase padre, con la finalidad de poder incluir el dato del departamento para esta clase hija
        return `Gerente: (${super.obtenerDetalles()}, Dpto: ${this._departamento})`;
    } 
    //con super.obtenerDetalles(), obtenemos el nombre y sueldo con el metodo de la clase padre, y con la sobreescritura se agregara el departamento.
}

let empleado1 = new Empleado("Diego", "600");
console.log(empleado1.obtenerDetalles());
//El metodo de la clase padre muestra nombre y sueldo

let gerente1 = new Gerente("Carlos", "5600", "Sistemas");
console.log(gerente1.obtenerDetalles());
//El metodo de la clase hija al Sobreescribirse, muestra nombre, sueldo y tambien el departamento.


/*----------------------------------------------------------- Polimorfísmo ---------------------------------------------------------*/

//Polimorfismo significa multiples formas, y se puede mostrar empleando las clases creadas en el codigo anterior de sobreescritura, ya que 
//con una linea de código se puede llamar un metodo de la clase pade o de la clase hija, todo depende a cual de ellos se este apuntando.

//Creamos una función que nos permita llamar el metodo obtenerDetalle de acuerto el tipo(clase a la que se apunta) que se le este pasando
function imprimir(tipo){
    return tipo.obtenerDetalles();
}

// le pasamos una referencia a la función de un objeto de tipo empleado(clase padre).
console.log(imprimir(empleado1));

// Ahora le pasamos una referencia a la función de un objeto de tipo gerente(clase hija).
console.log(imprimir(gerente1));


/*----------------------------------------------------------- instanceOf ---------------------------------------------------------*/

//Con la palabra reservada instanceOf, podemos validar si un objeto es una instancia de cierta clase o no

console.log(gerente1 instanceof Gerente);
//gerente1 SI es una instancia(Objeto) de la clase Gerente
console.log(empleado1 instanceof Gerente);
//empleado1 NO es una instancia(Objeto) de la clase Gerente

console.log(gerente1 instanceof Empleado);
//En este caso nos indica que gerente1 es una instacia de empleado, ya que la clase Gerente es una clase hija de la clase Empleado.