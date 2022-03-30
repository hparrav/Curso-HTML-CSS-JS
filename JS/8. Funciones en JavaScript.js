/* ------------------------------------------- Funciones en JS ----------------------------------------------------- */

//Hoisting (Nos permite llamar la función antes de ser definida).
miFuncion(8,2);

//Declaración de la función
function miFuncion( arg1 , arg2 ){
    console.log('Suma: ' + (arg1 + arg2  ));
}

//Se llama la función.
miFuncion(3,5);


/* ------------------------------------------- Función con retorno ---------------------------------------------------- */

function funcionRetorno( arg1 , arg2 ){
    return arg1 + arg2 /* Devuelve el valor en un retorno */
}

let x = funcionRetorno(10,5);
console.log(x);

/* --------------------------------------- Declaración Función de tipo expesión --------------------------------------- */
let sumar = function (a,b){return a + b };

x = sumar(1,2);
console.log(x);


/* -------------------------------------------------------- Función Self Invoking --------------------------------------- */
//Esta función se llama a sí misma apenas se crea, no se le asigna a ninguna variable.(Esta función solo se ejecuta una vez así misma y no se puede reutilizar)

(function (a , b){
    console.log('Ejecutando la función: ' + (a + b));
})(3,4)


/* ----------------------------------------------- ARROW FUNCTIONS----------------------------------------------------------*/
//No lleva la palabra return, solo los parametros y despues de una flecha => va la función
const sumarFuncionTipoFecha = (a,b) => a + b;

let resultado = sumarFuncionTipoFecha(3, 5);
console.log(resultado);
let resultados = sumarFuncionTipoFecha(8, 5);
console.log(resultados);


/* ----------------------------------------------------Argumentos y parametros------------------------------------------------------- */
//Los parametros son los campos que se le definen a la función y los argumentos son los valores que se le dan a esos campos en el llamado de la función

let sumarx = function (a = 4, b = 5){//Se definen parametros con valores por default, los cules seran reemplazados si al momento de ser llamada la función se le asignan unos valores diferentes
    console.log(arguments[0]); //muestra el valor del argumento dado al momento de llamr la función
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b ;
}

resultado = sumarx(3, 6 , 7); //Se pueden enviar mas argumentos que parametros definidos
console.log(resultado);

/* ----------------------------------------Sumar todos los argumentos de una función sin definir parametros------------------------- */
let result = sumarTodo(1,2,3,4,5,6,7,8);

function sumarTodo(){
    sumama = 0;

    for( let i=0; i < arguments.length; i++ ){ /* arguments es un metodo que devuelve los argumentos que se le pasen a una función */
        sumama += arguments[i];
    }
    console.log(sumama);
}