/* ------------------------------------------------------- try-catch ------------------------------------------------------------- */
//en esta lección se utilizara el modo estricto para poder visualizar como se hace el manejo de errores
"use strict"

//cuando se produce un error el códio detiene su ejecución, para poder permitir que el código continue y podamos capturar el error se envuelve todo en un try catch

try{ //en el try colocamos el código que queremos que se ejecute, así tenga error este continuara y la descripción del error la enviara al catch
   
    x=10; //Ya que se uso el modo estricto, en este caso que no se define la variable correctamente, se generara un error

}catch(error){ //el catch almacenara el error en el parametro que definamos en este caso en el parametro "error"

    console.log(error);
    //podemos mandar a imprimir la variable error y el código posterior a este try-catch podra continuar ejecutandose.

    //Si no existe error en el try, entonces la parte del catch no se ejecuta.
}

/* ----------------------------------------------- try - catch - finally(Opcional) ------------------------------------------------------------ */
//con el bloque finally siempre se ejecutara la parte de codigo que se defina dentro de ella, independientemente que lo que este en try, devuelva o no un error 
try{    
    miFuncion(); //para generar el error, colocamos una función sin definir
}catch(e){
    console.log(e);//imprimimos el error que se capturo en la variabel "e"
}finally{
    console.log("Termina la revisión de errores"); //Este bloque siempre se ejecutara, así exista o no un  error.
}

console.log("Código despues del try-catch, continuamos....."); //Con try-catch el código no termina su ejecuión


/*--------------------------------------------------------------- throw --------------------------------------------------------------*/
//Con la clausula throw, nosotros podemos arrojar nuestros propios errores

let resultado = -5; //Utilizaremos esta variable para probar varios mensajes que estableceremos con throw y que dependeran del valor de esta variable

try{
    if(isNaN(resultado)) throw 'No es un número'; //Definimos el mensaje de error, dependiento el valor que tome la validación del valor de la variable 
    else if( resultado === '') throw 'Es cadena vacía';
    else if( resultado >= 0) throw 'Valor positivo';
    else if( resultado < 0 ) throw 'Valor negativo';
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revisión de errores');
}
