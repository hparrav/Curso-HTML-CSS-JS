const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500)
];

const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) =>{
    return valor.toLocaleString("es-CO", {style:"currency", currency:"COP", minimumFractionDigits:2});//Funcion para hacer la conversión de formato a moneda
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("en-US",{style:"percent", minimumFractionDigits:2}); //Función para dar formato de porcentaje
}

const cargarIngresos = () => {
    let ingresosHTML = "";
    for(ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;    
}

const crearIngresoHTML = (ingreso)=> {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor"> + ${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"
                        onclick="eliminarIngreso(${ingreso.id})" > </ion-icon>
                    </button>
                </div>
            </div>
        </div>  
    `;
    return ingresoHTML;
}

const eliminarIngreso = (id) =>{ //Esta funcion es llamada por el evento onclick dentro del HTML de la funcion "crearIngresosHTML"
    //for(let ingreso of ingresos) ---- Con el siguiente arrow function podemos recorrer un arreglo de igual manera que un for-of
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id == id);
    ingresos.splice(indiceEliminar,1);//elimina el elemento con el indicie indicado, el 1 indica que solo elimina un elemento
    console.log(indiceEliminar);
    cargarCabecero();
    cargarIngresos();    
}

const cargarEgresos = () =>{
    let egresosHTML = "";
    for(egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    return document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=> {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                </button>
            </div>
        </div>
        </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (id) =>{ //Esta funcion es llamada por el evento onclick dentro del HTML de la funcion "crearIngresosHTML"
    //for(let ingreso of ingresos) ---- Con el siguiente arrow function podemos recorrer un arreglo de igual manera que un for-of
    let indiceEliminar = egresos.findIndex(Egreso => Egreso.id == id);
    egresos.splice(indiceEliminar,1);//elimina el elemento con el indicie indicado, el 1 indica que solo elimina un elemento
    console.log(indiceEliminar);
    cargarCabecero();
    cargarEgresos();    
}


let agregarDato = ()=>{
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];

    if(descripcion.value !== "" && valor.value !== ""){
        
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value,Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value,+valor.value)); //El + es una sintaxis simplificada para convertir un string a un Number
            cargarCabecero();
            cargarEgresos(); 
        }
    }
}