/*-----------------------------------------------IF-ELSE--------------------------------------------------------------------- */
let condicion = false;

if(condicion){
    console.log('La condición es verdadera');
}else{
    console.log('La condición es falsa');
}

//ELSE-IF
let numero = 1;

if(numero == 1){
    console.log('El numero es igual a 1');
}else if(numero == 2){
    console.log('El numero es igual a 2');
}else if(numero == 3){
    console.log('El numero es igual a 3');
}else{
    console.log('El número es diferente a 1, 2 o 3')
}


/* ----------------------------------------------SWITCH--------------------------------------------------- */
numero = 6;
let numeroTexto = 'Número desconocido';

switch(numero){ //En el switch las comparaciones son estrictas, por lo que debe coincidir tanto el valor como el tipo de dato.
    case 1:
        numeroTexto = 'Número uno';
        break; //El break es obligatorio o si no continua a la siguiente evaluación
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    case 5: case 6: case 7: case 8: case 9: case 10: //Se pueden agrupar los casos
        numeroTexto = 'Valor entre 5 y 10'
        break;
    default:
        numeroTexto = 'Otro número';
        break;
}

console.log(numeroTexto);