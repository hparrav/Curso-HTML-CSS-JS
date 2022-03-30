/* Sintaxis básica para eclarar variables */

/* para decalarar una variable se utilizaba el var + nombre de la variable + literal o valor */
 var nombre = 'literal'
 console.log(nombre);


 /* la utilización del var ya no es una buen practia, actualmente para las variables se utiliza el let */
 let nombre2 = 'Henry';
console.log(nombre2);

/* Para las constantes se utiliza el const, una coanstante despues de definida no puede ser modificada */
const constante = "Laura";
console.log(constante);

//Buenas practicas para la definición de variables---------------------------------------------------------------------

/* Las variables deben usar la notación de altas y bajas o (CAMEL CASE)*/
let unaVariable = 4;

/* Se pueden definir y reasignar variables en una misma linea */
let x , y;
x = 10, y = 20;
let z = x + y;
console.log(z);

/* JavaScript es sensible a mayusculas y minusculas */
let apellidocompleto = 'Parra Velasco';
let apellidoCompleto = 'Perez Vasquez';
console.log(apellidocompleto + " " + apellidoCompleto);

/* Reglas para dar nombre a las variables

    1. No debe comenzar el nombre por un número
    2. Los únicos caracteres especiales or los que puede comenzar una variables son el $ y el _
    3. No se pueden utilizar las palabras reservadas o key words, para nombrar las variables.

*/