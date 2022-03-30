/* ---------------------------------------------Metodo GET --------------------------------------------------------------- */
let persona = {
    nombre: "Juan", //atributos
    apellido: "Perez",
    email: "jperez@correo.com",
    edad: 28,
    get nombreCompleto(){ //Utilizando el metodo GET indicamos que es directamente una función por lo que solo hay que escribir el nombre de la función
        return this.nombre + ' ' + this.apellido
    }
}
//Para llamar la función ya no se necesitan parentesis, ya que el GET lo convierte en un metodo que permite obtener información o llamar la función
console.log(persona.nombreCompleto);


/* ---------------------------------------------Metodo SET ----------------------------------------------------------------- */
let personax = {
    nombre: "Juan", //atributos
    apellido: "Perez",
    email: "jperez@correo.com",
    edad: 28,
    idioma:'es  ',
    get lenguaje(){ //método GET
        return this.idioma.toUpperCase();//El metodo toUpperCase, permite convertir el valor a mayúscula
    },
    set lenguaje(lenguaje){ //El método SET nos permite modificar un valor de un atributo, en este caso el idioma
        this.idioma = lenguaje.toUpperCase();
    }
}
console.log(personax.lenguaje);
personax.lenguaje = 'en'; // Con el metodo set cambiamos el idioma de "es" a "en"
console.log(personax.lenguaje);
console.log(personax.idioma);//Validamos que si se cambio el valor del atributo idioma



/* ----------------------------------------- Contructor de Objetos ------------------------------------------------- */
function Empleado (nombre, apellido, email){ //Es recomendable que un constructor comience por mayuscula
    this.nombre = nombre; //El this.nombre es para el identificador de metodo y el nombre sencillo es el parametro que recibe al llamar el constructor
    this.apellido = apellido;
    this.email = email
    this.nombreCompleto = function(){ // De igual manera se le pueden asignar metodos o funciones que aplicaran a todos los objetos que se creen
        return this.nombre + " " + this.apellido;
    }
} 
//Se utilia el constructor para generar un nuevo objeto
let secretaria = new Empleado('susana','díaz', 'sdiaz@mail.com');
console.log(secretaria);
let analista = new Empleado('Diego', 'uribe', 'duribe@mail.com');
console.log(analista);

analista.nombre = 'nestor';//Se pueden modificar los valores de los atributos de igual manera
console.log(analista);
console.log(analista.nombreCompleto()); // llamamos el metodo del objeto

/* --------------------------------------------Metodo prototype ------------------------------------------------------ */
//Este metodo nos permite agregarle un nuevo elemento al contructor y que ese cambio lo tomen todos los objetos que han sido creados a partir del ese constructor
Empleado.prototype.telefono = '55415232';
console.log(secretaria.telefono);
console.log(analista.telefono);

/* --------------------------------------------- Metodo Call----------------------------------------------------------- */
//con este metodo podemos utilizar metodos definidos en un objeto, desde otro objeto para aplicarlos en el mismo
let automovil1 = { //Objeto 1, con el atributo de referencia completa
    marca: 'audi',
    color: 'rojo',
    referenciaCompleta: function(rango, modelo){
        return rango + ": " + this.marca + ' ' + this.color + ", " + modelo;
    }
}

let automovil2 = { // Objeto 2 sin metodos
    marca: 'Renault',
    color: 'azul',
}

//el objeto2 toma prestado el metodo del objeto1 para obtener su referencia completa (a traves del metodo call)
console.log(automovil1.referenciaCompleta.call(automovil2, "A", "2017" ));


/* --------------------------------------------- Metodo Apply----------------------------------------------------------- */
//el metodo apply nos va a permitir mandar a llamar un metodo en un objeto que no tienen definido cierto metodo
let automovil10 = { //Objeto 1, con el atributo de referencia completa
    marca: 'audi',
    color: 'rojo',
    referenciaCompleta: function(rango, modelo){
        return rango + ": " + this.marca + ' ' + this.color + ", " + modelo;
    }
}

console.log( automovil10.referenciaCompleta("B","2001") );


let automovil20 = { // Objeto 2 sin metodos
    marca: 'Renault',
    color: 'azul',
}

let arreglo = ["A", "2017"]; // Para el metodo apply se requiere crear un arreglo el cual contendra los datos que se le pasen al metodo

//el objeto2 toma prestado el metodo del objeto1 para obtener su referencia completa (a traves del metodo apply)
console.log(automovil10.referenciaCompleta.apply(automovil2, arreglo));
// a diferencia del metodo call, se requiere crear un arreglo para que puedan pasar los argumentos al metodo del objeto
