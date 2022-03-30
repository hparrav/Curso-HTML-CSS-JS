/* --------------------------------Modo Strict-------------------------------------- */

//Como se ha visto antes, si se utiliza una variable si haberla declarado, JavaScript no nos devolvera nigun tipo de error 
//Pero ya que esto se considera una mala practica podemos evitarlo utilizando el modo Strict.

//esto debe ser declarado en la primer línea del código, o si se requiere solo para una función, entonces se declara en la primera linea de una función

"use strict" //solo agregando esta linea se activa el modo estricto, no es necesario agregarlo, pero puede ser una buena practica
//Si quitamos el modo stricto no nos devolvera ningun mensaje de error al no definir la variable


let x = 2; // si quitamos el let, var o const, nos devolvera un mensaje de error.
console.log(x);


miFuncion();

function miFuncion(){
    //"use strict"   /*Si se requiere el modo estricto solo para una función, entonces no se incluye en la primera linea del codigo, si no en la primer linea de la función*/
    var y = 5; //De igual modo este concepto aplica así sea una función, si quitamos el let, var o const, nos devolvera un mensaje de error.
    console.log(y);
}