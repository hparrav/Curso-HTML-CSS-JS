/* ----------------------------------------------Static ------------------------------------------------------------------- */
class Persona{ 

    //Atributos staticos
    static contadorObjetosPersonas = 0;//Los atributos static se asocian con la clase (plantilla)
    static generarID = 1; //Podemos generar un contador que incremente y le asigne un valor a un atributo a medida que se crean mas clases.

    //Atributos no static
    email = 'miemail@mail.com'; //Los atributos no static, se asocian a tráves de los objetos

    constructor(nombre, apellido){ 
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorObjetosPersonas++; //Se puede hacer un metodo contador que incremente a medida que se crean mas objetos.
        this.idPersona = Persona.generarID++;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    nombreCompleto(){ 
        return this.nombre + " " + this.apellido;
    }

    static saludar(){//Un metodo static se asocia solo con esta clase y no con los objetos que se creen a partil de ella
        console.log('Saludos desde el metodo static');
    }

    //Pero si se puede crear un metodo que reciba como argumento un objeto, en este caso que muestre el valor del atributo nombre de ese objeto  
    static saludar2(persona){
        console.log('Hola ' + persona.nombre);
    }
}

let personax = new Persona('Juan', 'Perez');
//personax.saludar();   No es posible llamar un metodo static desde un objeto

Persona.saludar(); //El metodo static solo podra ser llamado desde la clase

Persona.saludar2(personax); //El metodo estatico recibe como argumento el objeto que se creo y muestra el valor del atributo nombre

//El metodo static no puede ser utilizado por un objeto, pero si por una clase hija, static siempre se relaciona con clases y no con objetos.


/* ----------------------------------------------------Atributos estaticos ---------------------------------------------- */
//Una vez definida el atributo static en la clase, lo llamamos a travez de la clase y no desde el objeto, al igual que con el metododo static
console.log(Persona.contadorObjetosPersonas);
console.log(personax.idPersona); //Obtenemos el ID generado por el contador generador de ID

//A medida que se crean más objetos el número del contador aumenta
let personaz = new Persona('Diego', 'Ramirez');
console.log(Persona.contadorObjetosPersonas);
console.log(personaz.idPersona);

let personaw = new Persona('Milena', 'Patiño');
console.log(Persona.contadorObjetosPersonas);
console.log(personaw.idPersona);

//Al crear objetos de una clase hija, el contador tambien aumentara ya que de manera indirecta la clase hija llama a la clase padre.

/* ----------------------------------------------------Atributos no estaticos ---------------------------------------------- */
//Una vez definido el atributo no static en la clase, lo llamamos a traves del objeto y no desde la clase.
console.log(personax.email);
