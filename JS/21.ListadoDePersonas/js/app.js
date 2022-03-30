const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const formulario = document.forms["forma"];
    const nombre = formulario["nombre"].value;
    const apellido = formulario["apellido"].value;

    if(nombre != "" && apellido != ""){
        personas.push(new Persona(nombre,apellido));
        mostrarPersonas();
    }else{
        console.log("Hay datos vacios");
    }

}
