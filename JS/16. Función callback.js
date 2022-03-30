/*---------------------------------------------------------- Función CallBack --------------------------------------------------------- */
//Es una función que se pasa como parametro de otra función, eso quiere decir que dentro de una función se puede llamar a otra función.

//Esta es la manera normal de definir y empler una función
miFuncion2();
miFuncion1();
function miFuncion1(){
    console.log('función 1');
}
function miFuncion2(){
    console.log('función 2');
}


//De esta manera se emplea la Función de tipo CallBack
let imp = function imprimir(mensaje){ //Se crea la fución que se pasara como parametro a la función sumar
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){ //el parametro funcionCallBack toma la referencia a la función imprimir
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`); //Se llama indirectamente la función imprimir ya que a el parametro funcionCallBack se le asigno la función imprimir y por lo tanto apunta a ella
}

sumar(5,3, imp); //Llamamos la función sumar y le pasamos los paramentros, incluyendo la función imprimir(en estos casos no debe llevar parentesis)


/*------------------------------------------------ Llamadas asíncronas con uso setTimeout ------------------------------------------*/
//El objetivo de las funciones call back es que se empleen para procesos que se ejecutan de manera asincrona

//Procesos sincronos = Hace referencia a los procesos que se ejecutan una linea a la vez, si se hace una llamada a un servidor, no se puede continuar en la ejecució hasta que se reciba respuesta
//Procesos asincronos = Hace referencia a varios procesos que se pueden ejecutar por separado, se puede hacer una solicitud a un servidor y el codigo puede continuar ejecutandose, mientras llega la respuesta

//Con la función setTimeout, podemos ejecutar de manera asíncrona una tarea en un tiempo que se define en milisegundos.

function miFuncionCallback(){
    console.log('saludo asíncrono después de 3 seg');
}
setTimeout(miFuncionCallback, 3000);//después de 3 seg se ejecuta

setTimeout( function(){ console.log('saludo asíncrono 2')}, 4000); //después de 4 seg se ejecuta

setTimeout( () => console.log('saludo asíncrono 3'), 1000); //después de 1 seg se ejecuta

/*------------------------------------------- Llamadas asíncronas con uso setInterval ------------------------------------------*/
//mediante el set interval, podemos hacer el llamado periodico de una misma función en un intervalo de tiempo definido
//Para el siguiente ejemplo pediremos la hora el minuto y el segundo actual, en intervalos de un segundo

let reloj = () => {

       let fecha = new Date();
       console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);   
}
setInterval(reloj,1000); 