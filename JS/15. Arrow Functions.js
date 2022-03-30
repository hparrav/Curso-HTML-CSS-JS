//Estructura de una función normal

function miFuncion(){
    console.log("Saludos desde mi función");
}
miFuncion(); // Llamado de la función

let miFuncion2 = function (){
    console.log("Saludos desde mi función2");
}
miFuncion2(); // Llamado de la función


/*-------------------------------------------------------- ARROW FUNCTION -----------------------------------------------------------------*/
///Pasar de la estructura normal de la función a una función flecha(Arrow Function).
//Para la Arrow Function no aplica el concepto de Hosting, si se llama la función antes de definirla, esto nos devolvera un error

const miFuncionFlecha = () =>{  //En arrow function se puede usar tanto let como const(No se podra modificar la referencia)
    console.log("Saludos desde mi función flecha");
}
miFuncionFlecha();


// Si en la arrow function, solo se ejecuta una linea de comandos en su cuerpo, no hay necesidad de utilizar llaves
const miFuncionFlecha2 = () => console.log("Saludos desde mi función flecha2 sin llaves");

miFuncionFlecha2(); 


//Si es una sola linea, implicitamete el arrow function tiene un "return", por lo que si solo colocamos el mensaje el lo retornara.
const miFuncionFlecha3 = () => "Saludos desde función flecha 3"

console.log(miFuncionFlecha3()); 


// En el caso de que se quiera devolver un objeto con la Arrow Function, el cuerpo de la función no puede ir entre llaves
//ya que el objeto tambien comienza por llaves, por lo que cambiamos el incio y fin del cuerpo de la función, por parentesis

const regresarObjeto = (nombre, apellido) => ({
    nombre: nombre,
    apellido: apellido
});

console.log(regresarObjeto("Juan", "Perez")); 
