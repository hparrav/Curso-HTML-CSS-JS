var nombre ='juan';
var apellido = 'Perez';

/* Concatenar con el simbolo (+) */
var nombreCompleto = nombre + ' ' + apellido;
 console.log(nombreCompleto);

/* Directamente en la variables */
 var nombreCompleto2 = 'Henry' + ' ' + 'Parra';
 console.log(nombreCompleto2);

 /* concatenar con un número */
 var x = nombre + 259; /* Las expesiones en JS se leen de izquierda a derecha, por lo que en el siguiente ejemplo lo primero que encuentra es un string, po lo que el mas (+) se utiliza para concatenar y el número lo toma como un texto */
 console.log(x);


 x = 'Laura' + (4 + 5); /* Para que haga un suma primero, se utilizan los parentesisi para indicar la prioridad con la suma de los números dentro de los parentesis */
 console.log(x);

 x = 2 + 4 + 'Laura'; /* En el caso que comience primero con números, se hace la operación mateatica y luego concatena con el texto */
console.log(x)