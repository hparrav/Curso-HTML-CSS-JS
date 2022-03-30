/* Tipos de datos */

/* Variable asingnandole un tipo de dato string -------------------------------------------------------------- */
var nombre = "Henry"; 
console.log(nombre);


/* Variable con tipo de dato númerico ------------------------------------------------------------------------ */
var numero = 1500;
console.log(numero);
console.log(typeof numero) //Con la función typeof podemos saber que tipo de dato tiene una variable
/* 
Las variables en JavaScript son dinámicas, lo que permite que una variable que tiene asignado un número y por lo tanto es de tipo númerico,
pueda asignarsesele porteriormente una variable de tipo String y por lo tanto cambiara su tipo a String.
*/
numero = "Texto";
console.log(numero);
console.log(typeof numero);


/* tipo de dato Objeto -----------------------------------------------------------------------------------------*/
var objeto = {
    nombre : "Juan",
    apelido : "Perez",
    telefono : "3218532165"
}
console.log(objeto);

/* Variable con tipo de booleano ------------------------------------------------------------------------------ */
var bandera = true;
console.log(bandera);

bandera = false;
console.log(bandera);
console.log(typeof bandera);


/* Tipo de dato función---------------------------------------------------------------------------------------- */
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

/* Tipo de dato Symbol------------------------------------------------------------------------------------------ */
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

/* Tipo de clase es una función--------------------------------------------------------------------------------- */
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apelido = apellido;
    }
}
console.log(persona);
console.log(typeof persona);


/* Tipo undefined--------------------------------------------------------------------------------- */
var x;
console.log(x);
console.log(typeof x);

nombre = undefined; /* se le puede asignar a una variable con un valor previo, el valor de undefined */
console.log(nombre);
console.log(typeof nombre);


/* Tipo null(ausencia de valor)--------------------------------------------------------------------------------- */
var y = null;
console.log(y);
console.log(typeof y);


/* Tipo Array (tipo object)--------------------------------------------------------------------------------- */
var autos = ['BMW','AUDI','VOLVO'];
console.log(autos);
console.log(typeof autos);


/* Cadena vacia (tipo string)--------------------------------------------------------------------------------- */
var z = '';
console.log(z);
console.log(typeof z);