const mostraReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr} : ${min} : ${sec}`;

    const meses = ['Ene', 'Feb', 'Mar','Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');//utiliza el estilo definido en css y funciona alternando por llamadas, en la primera llmada se aplica el estilo y en la segunda no se aplica.
    //la función toggle es un interrunpor que agrega al elemento una clase y en el siguiente la quta
}

const formatoHora = (hora) =>{
    if(hora<10){
        hora = "0" + hora;
    }
    return hora;
}

setInterval(mostraReloj,1000);