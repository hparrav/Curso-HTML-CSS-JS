function sumar() {

  const forma = document.getElementById("formulariox"); //Recuperamos el formulario
  let operandoA = forma["operandoa"]; //recuperamos los valores de los operadores
  let operandoB = forma["operandob"];

  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value); //Convertimos los valores a tipo número y los sumamos

  if (isNaN(resultado)) { //Validamos si la suma es un valor, o los operadores estaban vacios o con otro tipo de dato, de ser así, reasignamos el valor de la variable resultado
      resultado = "La operación no incluye números";
  }

  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`; //asignamos el valor de resultado al elemento "div" con el id de "resultado"
  console.log(`Resultado: ${resultado}`);

}