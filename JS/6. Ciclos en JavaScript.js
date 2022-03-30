/* --------------------------------------------------While------------------------------------------------- */
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
    console.log(contador);
}
console.log('Se termino el ciclo while');


/* --------------------------------------------------Do-While------------------------------------------------- */
contador = 0;

do{ //Se ejecuta por lo menos una vez el proceso antes de que sea evaluado en el while
    console.log(contador);
    contador++;
    console.log(contador);
}while(contador > 3);

console.log('Se termino el ciclo do-while');


/* --------------------------------------------------FOR------------------------------------------------- */
//for(variable con la que inicia ; condición que se evalua ; acción que hace en cada ciclo)

for(let i = 0 ; i <= 3 ; i++ ){
   
    console.log(i);
}
console.log('Se termino el ciclo for');


/* -------------------------------------------------palabra BREAK ------------------------------------------------ */
//El break nos sirve para terminar la continuidad de un ciclo
//En el siguiente ejemplo nos sirve para que cuando encuentre el primer número par el for no se ejecute más

for(let x = 0 ; x <= 10 ; x++ ){
    if(x % 2 !== 0 ){ 
        console.log(x); 
        break;
    }     
}

/* -------------------------------------------------palabra CONTINUE ------------------------------------------------ */
// La palabara continue no para un ciclo, pero si detiene su ejecución y da paso a su siguiente iteración
//En el siguiente caso solo nos mostrara los numeros pares, ya que cuando enuentre un numero impar entonces seguira a la siguiete iteración y no imprime nada

for(x = 0 ; x <= 10 ; x++ ){
    if(x % 2 !== 0 ){ 
        continue;
    }
    console.log(x); 
}


