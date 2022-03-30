/* ----------------------------------------- Clases en JavaScript ------------------------------------------------------ */
class Persona{ //Las clases deben comenzar por mayuscula
    constructor(nombre, apellido){ //Dentro de la clase se debe generar el constructor
        this._nombre = nombre; //Es recomendable colocar una raya al piso en el nombre del atributo, para que no haya problemas con los metodos GET y SET
        this._apellido = apellido;
    }

    get nombre(){ //Se crea el metodo get para obtener valores del objeto
        return this._nombre;
    }

    set nombre(nombre){//Se crea el metodo set para modificar valores del objeto
        this._nombre = nombre;
    }

    get apellido(){ //Se crea el metodo get para obtener valores del objeto
        return this._apellido;
    }

    set apellido(apellido){//Se crea el metodo set para modificar valores del objeto
        this._apellido = apellido;
    }

    nombreCompleto(){ //metodo para obtener el nombre completo
        return this.nombre + " " + this.apellido;
    }


    //Sobreecribiendo el metodo de la clase padre (OBJECT)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo (Objeto al que se este apuntando)
        return this.nombreCompleto();
    }

}

let persona1 = new Persona('Henry','Parra'); //Se crea un nuevo objeto, con llamar la clase inmediatamente ente parentesis se envía los argumentos que hacen referencia al constructor.
console.log(persona1);

//metodo GET
console.log(persona1.nombre); //sin necesidad de parentesis funciona el metodo get

//metodo SET
persona1.nombre = 'Carlos';//Se modifica el valor del atributo nombre usando SET, este metodo tampoco requiere parentesis
console.log(persona1.nombre); //Se valida la modificación con el GET


/* ------------------------------------------------------ HERENCIA ------------------------------------------------------ */
//Se crea una clase hija que tomara los mismos atributos de la clase padre, ademas de que puede tener sus propios atributos

class Empleado extends Persona{ //Con la palabra reservada extends hacemos referencia a que clase queremos heredarle los atributos y metodos

    //Creamos un constructor propio para la clase hija Empleado, que nos permita definir el atributo de departamento, pero debemos incluir tambien los atributos de la clase padre
    constructor(nombre, apellido, departamento){ 
        super(nombre, apellido);//LLamamos el constructor de la clase padre, Pasandole los parametros de nombre y apellido que solicitamos a traves de la clase hija
        this._departamento = departamento;
    }

    get departamento(){ //Se crea el metodo get para obtener valores del objeto
        return this._apellido;
    }
    set departamento(departamento){//Se crea el metodo set para modificar valores del objeto
        this._departamento = departamento;
    }

    //Sobreescritura de metodos
    nombreCompleto(){ //metodo para obtener el nombre completo + el departamento, heredado del padre y modificado en la hija
        return super.nombreCompleto() + " " + this._departamento; //Super nos sirve para llamar el metodo de la clase padre, adicional le agregamos el nuevo valor
    }
}
// Creamos un nuevo objeto empleado, en el cual indicaremos los atributos heredados de la clase pade (nombre y apellido) y tambien se incluye el atributo propio de la clase hija (departamento)
let empleado1 = new Empleado('Maria', 'Jimenez','Sistemas');

console.log(empleado1);
console.log(empleado1.nombre);//Validamos que se hereda el metodo get de la clase padre
console.log(empleado1.nombreCompleto());//Validamos que hereda los metodos de la clase padre


/* Object es la clase padre de todas, todas las clases que se creen, siempre van a heredar de la clase Object, por lo tanto Object tiene unos metodos que aplican a todas la clases en JS */
 console.log(empleado1.toString());

//Polimorfismo, depende de la clase (padre o hija) a la que haga referencia el toString que ha sido sobre escrito se comportara de maneras deiferentes.
 console.log(persona1.toString());
 console.log(empleado1.toString())

