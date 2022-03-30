let a = 3, b = 2;
let z;

/*--------------- Operadores aritmeticos de ( + , - , * , / , % , **) ------------------------------- */

z = a + b; /* Suma */
console.log(`Resultado de la suma`, z);

z = a - b; /* Resta */
console.log(`Resultado de la resta`, z);

z = a * b; /* Multiplicación*/
console.log(`Resultado de la multiplicación ${z}`);

z = a / b; /* División */
console.log(`Resultado de la suma ${z}`);

z = a % b; /* Modulo o residuo */
console.log(`Resultado del modulo (Residuo) ${z}`);

z = a ** b; /* exponente */
console.log(`Resultado del exponente ${z}`);

/*--------------- Operadores de incremeto y decremento ( ++ , -- ) ------------------------------- */

//Pre-incremento (El operador ++ antes de la variale) Indica que primero se aumenta el valor de la variable a y luego se le asigan ese valor a z
z = ++a; /* ambas variables quedaran con un valor de 4 */
console.log(a);
console.log(z);

//Post-incremento (El operador ++ despúes de la variable) primero se le asigna el valor a z y luego incrementa b
z = b++; /* z queda co un valor de 2 y b con un valor de 3 */
console.log(b);
console.log(z);

(a = 3), (b = 2);
//Pre-decremento (El operador -- antes de la variale) Indica que primero se disminuye el valor de la variable a y luego se le asigna ese valor a z
z = --a; /* ambas variables quedaran con un valor de 2 */
console.log(a);
console.log(z);

//Post-decremento (El operador -- despúes de la variable) primero se le asigna el valor a z y luego decrementa b
z = b--; /* z queda co un valor de 2 y b con un valor de 1 */
console.log(b);
console.log(z);

/* -------------------------------Operadores de asignación ---------------------------------*/
z = 4; //Simple
console.log(z);
z += 3; //Compuesto
console.log(z);
z -= 1; //Compuesto
console.log(z);
z *= 10; //Compuesto
console.log(z);
z /= 6; //Compuesto
console.log(z);
z **= 2; //Compuesto
console.log(z);
z %= 1; //Compuesto
console.log(z);

/* -------------------------------------------Operadores de comparación------------------------------------- */
let q = 3,
  w = 2,
  e = "3";

z = q == e; /* comparador de igualdad no estricto (valida solo el valor más no el tipo de dato) */
console.log(z);
z = q === e; /* comparador de igualdad estricto (valida el valor y tambien el tipo de dato) */
console.log(z);

z =q != e; /* comparador de desigualdad no estricto (valida solo el valor más no el tipo de dato) */
console.log(z);
z = q !== e; /* comparador de desigualdad estricto (valida el valor y tambien el tipo de dato) */
console.log(z);

/* ----------------------------------------Operadores relacionales--------------------------------------------- */
z = w > e; /* Mayor que */
console.log(z);

z = w >= e; /* Mayor o igual que */
console.log(z);

z = w < e; /* Menor que */
console.log(z);

z = w <= q; /* Menor o igual que */
console.log(z);

/* --------------------------------------------Operador AND y OR--------------------------------------------------- */
//AND
a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
  //Evaluación con un AND (&&), ambas condiciones tienen que ser verdaderas para que el AND devuelva un true
  console.log("El número se encuentra en el rango");
} else {
  console.log("El valor no se encuentra en el rango");
}

//OR
let vacaciones = true,  diaDescanso = false;

if (vacaciones || diaDescanso) {
  /* Evalución con un OR (||), si alguna de las condiciones o ambas se cumple, entonces devuelve un true */
  console.log("Puede ir al concierto");
} else {
  console.log("No puede ir al concierto");
}

/* ----------------------------------------------------Operador ternario ------------------------------------------------- */
//El operador ternario es parecido al if else
//  CONDICIÓN ? Expesión1(si cumple la condición) : Epresión2(Si no cumle la condición)

let resultado = 3 > 2 ? "Verdaderox" : "Falsox";
console.log(resultado);

resultado = 9 % 2 === 0 ? "Verdaderox" : "Falsox";
console.log(resultado);

/* -------------------------------------------------------Convertir a numero un String------------------------------------ */
let miEdad = "16";

miEdad = Number(miEdad); /* Con Number podemos convertir un string en número */

let edad = miEdad >= 18 ? "Puede votar" : "Es muy joven para votar";
console.log(edad);

/* ------------------------------------------------ Función isNaN------------------------------------------------------ */
//Con esta función validamos que un valor sea númerico, para explicarlo utilizamos el ejercicio anterior.

miEdad = "19x";

miEdad = Number(miEdad);
console.log(miEdad)

if (isNaN(miEdad)) {
  console.log("El valor ingresado no es un número");
} else {
  let edad = miEdad >= 18 ? "Puede votar" : "Es muy joven para votar";
  console.log(edad);
}
