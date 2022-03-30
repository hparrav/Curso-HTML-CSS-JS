//Una promesa es código que tiene varios estados, se puede lanzar una petición y asignar un código si la promesa se resolvio correctamente y otro código si la promesa es rechazada
//Para cuando la promesa es resulta se utiliza el .then() y para cuando es rechazada(error) se utiliza el .catch()

let miPromesa = new Promise((resolved, rejected) => { //Esta promesa tiene dos parametros los cuales son dos funciones de tipó callback, (empleamos una función flecha)
    let expresion = true; //Variable que se define para hace la prueba(simular) donde el codigo sea resulto "true" o donde haya un error en la promesa "false"
    if(expresion)
        resolved('Resolvió correcto'); //caso de resuelto (exitoso)
    else
        rejected('Se produjo un error'); //Caso de rechazada
});

/* miPromesa.then( 
    valor => console.log(valor), 
    error => console.log(error)
    ); */ //Se ejecuta llamando el metodo then(), se definen dos funciones flechas para recibir los valores

miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error)); //otra forma de ejecutar la promesa, con then().cash()


/*--------------------------------------------------- Promesas con setTimeout --------------------------------------------------------*/
let promesa = new Promise((resolver) => { //Para la promesa no es necesario los dos argumentos, en este caso solo se usara el de resuelto
   console.log("Inicio promesa......");

    setTimeout(()=> {
        resolver("Saludo con promesa y Timeout"),3000
    });

    console.log("Fin promesa.");
});

promesa.then((valor) =>{valor;}); //En esta llamada de promesa, solo se recibe el valor de resolver

/*-------------------------------------------------------------- async -------------------------------------------------------------------*/
//Cuando trabajamos con async estamos definiendo que una función debe regresar una promesa

async function miFucionConPromesa(){ //La promesa ya no requiere de un metodo "resolved", simplemente ella hace un retorno de un valor que seria el equivalente al "resolved"
    return "Saludos con promesa y async"
}
//En el llamado de la función con async si se requieren los parentesis ya que es una función normal, pero con definición de promesa asyncrona
miFucionConPromesa().then((valor => console.log(valor)));

//esta es una manera de simplificar las promesas, ya que con el uso del "async", una función normal se convierte en promesa.

/*------------------------------------------------- async - await ---------------------------------------------------------------------*/
//La palabra reservada "await" lo que hace es esperar el resultado de una promesa, sin necesidad del then se puede validar

async function miFucionConPromesaYAwait(){ 
    let miPromesa = new Promise((resolver) => { //Definimos la promesa
        resolver("Saludos con promesa, async y await");
    })
    
    console.log(await miPromesa); //con el await podemos procesar nuestra promesa(la manda a llamar y una vez se cumpla almacena el resultado en miPromesa) y así poder consumirla
}

miFucionConPromesaYAwait(); //y se consume sencillamente llamandola, sin necesidad de el then()


/*------------------------------------------------------ promesas, await, async y setTimeout -----------------------------------------*/
//empleamos el async, el await(el cual no funciona si la función no tiene async) y el setTimeot para que haga la promesa en un cieto tiempodefinido.

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio función');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);
    console.log('fin función');
}

funcionConPromesaAwaitTimeout();