/* --------------------------------------------------- OBJETOS ------------------------------------------------------------- */
let persona = {
    nombre: "Juan", //atributos
    apellido: "Perez",
    email: "jperez@correo.com",
    edad: 28,
    nombreCompleto: function(){ //Se crea un metodo o función
        return this.nombre + ' ' + this.apellido  //Se utiliza el this para llamar atributos creados dentro del mismo objeto donde estamos
    }
}
console.log(persona.email);//para acceder a los atributos del objeto lo hacemos con el punto:  objeto.atributo
console.log(persona.edad);

console.log(persona.nombreCompleto());//Para acceder a un metodo se debe llamar la función con parentesis y si requiere se deben ingresar los argumentos

//Otra manera de crear objetos
let persona2 = new Object();
persona2.nombre = "Henry";
persona2.direccion = "Calle la jeta";
persona2.telefono = '654654654'
console.log(persona2);

console.log(persona2['direccion']); //Esta es otra manera de obtener el valor de un atributo en un objeto, entre corchetes se coloca entre comillas el nombre del atributo


/* ----------------------------------- Recorrer objetos con el for in --------------------------------------------------  */
for (nombrePropiedades in persona){
    //Accedemos al nombre de los atributos con la variable de iterador que se definio
    console.log(nombrePropiedades);
    //Ingresamos al valor de cada atributo
    console.log(persona[nombrePropiedades]);
}


/* ------------------------------- Agregar y eliminar propiedades de los objetos---------------------------------------  */
//Para agregar un elemento como ultimo elemento del objeto se hace de la siguiente manera
persona.identificacion = '1024789632';
console.log(persona);

//Para eliminar un elemento dentro del el objeto utilizamos la palabra reservada delete
delete persona.identificacion;
console.log(persona);


/* ---------------------- Formas de mandar a imprimir los valores de un objeto ---------------------------------------- */
//concatenar el valor de cada atributo
console.log(persona.nombre + "," + persona.apellido);

//Con el uso del for in
for(valores in persona){
    console.log(persona[valores]);
}

//con el metodo de objetos .values(objeto) (devuelve todos los valores de un objeto)
let valoresArray = Object.values(persona);
console.log(valoresArray);

//utilizar el metodo JSON.stringify(objeto) (convierte todo en una cadena)
let personaString = JSON.stringify(persona);
console.log(personaString);