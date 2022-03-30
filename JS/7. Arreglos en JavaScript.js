/* -------------------------------------------------Arreglos-------------------------------------------------------- */
//los arreglos son elementos de tipo objeto que permiten almacenar datos en campos.

let autos = new Array('BMW','Mercedes Benz','Volvo','Audi'); // manera antigua de declarar un arreglo
console.log(autos)

const autos2 = ['BMW','Mercedes Benz','Volvo','Audi']; //mejor forma de definir un arreglo
console.log(autos2)


/* ------------------------------------------------Recorrer Arreglos-------------------------------------------------------- */

//ingresar a un solo elemento
console.log(autos2[0]); //accedemos solo al primer elemento del arreglo, el indice cominza en 0, por lo que esa seria la primera posición

//recorrer el arreglo
for(let i = 0 ; i < autos2.length ; i++){
    console.log(autos2[i] + "(" + i + ") ");
}


/* -------------------------------------------- Modificar los elementos de un Arreglo -------------------------------------------------------- */
console.log(autos2)

autos2[2] = 'Mazda'; //Solo con asignarle un nuevo valor con el indice, modificamos el tercer elemento del arreglo

console.log(autos2)


/* -------------------------------------------- agregar elementos a un Arreglo ------------------------------------*/
//PUSH
console.log(autos2);
autos2.push('Toyota','Jeep'); //con el metodo push podemos agregar nuevos elemento al arreglo
console.log(autos2);

//.LENGTH
autos2[autos2.length] = 'Porshe'; 
console.log(autos2);


/* ----------------------------------------comprobar si un elemento es un arreglo con .isArray ------------------------------------*/

console.log(Array.isArray(autos2)); //nos devuleve true o false

console.log(autos2 instanceof Array); //valida si autos dos es una instancia de Array


