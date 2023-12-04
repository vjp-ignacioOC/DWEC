/*API https://randomuser.me/api/?results=10

1. Nombres
2. Menores de 35 años
3. Nombre de nacionalidad ES.
 /

/**
 * + Constantes para cada campo
 */
// Para buscar por nombres.
const botonNombre = document.getElementById("botonNombres");
const listaNombre = document.getElementById("listaNombres");

// Para buscar por edad
const botonEdad = document.getElementById("botonEdad");
const inputEdad = document.getElementById("edad")
const listaEdad = document.getElementById("listaEdad");

// Para buscar por nacionalidad
const botonNacion = document.getElementById("botonNacion");
const inputNacion = document.getElementById("nacion")
const listaNacion = document.getElementById("listaNacion");


/**
 * + Creación de la clase Persona.
 */
class Persona {
    constructor(objPersona) { // Le pasamos el objeto al constructor
        this.nombre = objPersona.name.first; // Del objeto lo dividimos dependiendo de lo que queramos
        this.edad = objPersona.dob.age;
        this.nacionalidad = objPersona.nat;
    }

    // Método que retorna el nombre
    getNombre() {
        return this.nombre;
    }
    // Método que retorna la edad
    getEdad() {
        return this.edad;
    }
    // Método que retorna la nacionalidad
    getNacionalidad() {
        return this.nacionalidad;
    }
    // Método que retorna toda la información en forma de String
    getInfo() {
        return `Nombre: ${this.nombre} Edad: ${this.edad} Nacionalidad: ${this.nacionalidad}`;
    }
}

/**
 * + Esta función saca la información de la Api que tengamos con el fetch y la pasa a otra función
 * + que se encarga de darle funcionalidad
 */
function sacarInformacion() {
    const apiUrl = `https://randomuser.me/api/?results=20`; // Constante que almacena la API

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            mostrarInformacion(data); // Llamada a la función donde se dará funcionalidad a cada botón
        })
        .catch(error => { // Si no se puede acceder a API salta el siguiente error:
            console.error('Hubo un problema con la solicitud: ', error);
        });
}

/**
 * + La función mostrarInformacion() recibe por parámetros la información que hemos extraido de la API
 * + con el fetch anteriormente. En esta función crearemos un array de Personas, el cual utilizaremos
 * + para ahorrar código y no tener que crear las mismas personas cada vez que queramos acceder a ellas.
 */
function mostrarInformacion(data) {
    // Creación del array que contendrá todas las Personas.
    let personasJson = [];
    // Nos recorremos los datos para poder crear una Persona por cada dato que tengamos.
    data.results.forEach(element => { // Importante, data.results porque lo que queremos es los resultados de los datos.
        let persona = new Persona(element); 
        personasJson.push(persona); // Utilizamos push() para introducir los objPersona en el array 
    });

    /**
     * - Creación del botón nombre, a la hora de hacer click en éste botón, se ejecutará una función que 
     * - dará funcionalidad al botón (muestra los nombres que hay en cada obj).
     */
    botonNombre.addEventListener('click', function () {
        mostrarNombres(personasJson); // Llamada a la función para mostrar los nombres
    });

    /**
     * - Creación del botón Edad, a la hora de hacer click en éste botón, se ejecutará una función que 
     * - dará funcionalidad al botón (muestra todos las Personas con el getInfo() dependiendo de la edad).
     */
    botonEdad.addEventListener('click', function () {
        mostrarPersonaPorEdad(personasJson); // Llamada a la función para mostrar las Personas dependiendo de la edad
    });

    /**
     * - Creación del botón Nación, a la hora de hacer click en éste botón, se ejecutará una función que 
     * - dará funcionalidad al botón (muestra todos las Personas con el getInfo() dependiendo de la nacionalidad
     * - que el usuario haya introducido).
     */
    botonNacion.addEventListener('click', function () {
        mostrarNacionesSegunUsuario(personasJson); // Llamada a la función para mostrar las Personas dependiendo de la nacionalidad
    });
}

/**
 * + Esta Función recibe el array que contiene todas las Personas, lo recorre y pregunta si, los datos que ha
 * + introducido el usuario son iguales a la nacionalidad que tiene la Persona, entra en el if y crea el elemento
 * + con toda la información de la persona
 */
function mostrarNacionesSegunUsuario(personasJson) {
    personasJson.forEach(element => {
        if (inputNacion.value === element.getNacionalidad()) { 
            crearLi(element.getInfo(), listaNacion); // Llamada a la función para crear el Li en el UL de la Nacionalidad.
        }
    });
}

/**
 * + Esta Función recibe el array que contiene todas las Personas, lo recorre y pregunta si, la edad que ha introducido el
 * + usuario es mayor que la edad de la Persona, si es así, entra en el if y crea el elemento con toda la información de la
 * + Persona
 */
function  mostrarPersonaPorEdad(personasJson) {
    personasJson.forEach(element => {
        if (inputEdad.value > element.getEdad()) {
            crearLi(element.getInfo(), listaEdad); // Llamada a la función para crear el Li en el UL de la edad.
        }
    });
}


/**
 * + Esta Función recibe el array que contiene todas las Personas, lo recorre y muestra todos los nombres de todas las Personas
 */
function mostrarNombres(personasJson) {
    personasJson.forEach(element => {
        crearLi(element.getNombre(), listaNombre); // Llamada a la función para crear el Li en el UL de nombre.
    });
}

/**
 * + Esta Función recibe la información de cada Persona y dónde hay que introducirlo, después crear el elemento LI, le introduce
 * + la información que le han pasado por parámetros y le hace un appendChild() para meterlo en el UL que le han pasado por parámetros.
 */
function crearLi(informacionPersona, ul) {
    let li = document.createElement('li');
    li.innerText = informacionPersona;
    ul.appendChild(li);
}

/**
 * + Llamada a la función principal de la aplicación. 
 */
sacarInformacion();