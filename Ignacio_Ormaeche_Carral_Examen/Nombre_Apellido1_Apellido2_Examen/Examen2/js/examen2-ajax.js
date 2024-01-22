'use strict';
/**
 * Importante: He cambiado todos los selectores y botones a "const" para que sean globales y
 * pueda cogerlos en cualquier parte de mi código sin necesidad de pasarlos por parámetros.
 */

// Mostrar nombres
const bNombre = document.getElementById("botonNombre");
const cNombre = document.getElementById("contenedorNombres");

// Mostrar fotos con nombre
const bFotos = document.getElementById("botonFotos");
const cFotos = document.getElementById("contenedorFotos");

// Mostrar nombres filtrados
const tNombreFiltrado = document.getElementById("filtrarNombre");
const bNombreFiltrado = document.getElementById("botonFiltrarNombre");
const cNombreFiltrado = document.getElementById("contenedorNombresFiltrados");

/**
 * Creación de la función que manda la petición a través de fetch a la API.
 */
function peticionAjax() {
    const urlPeticion = "https://raw.githubusercontent.com/jesusredondo/PracticaBuscaminas-BASE18-19/master/json/PasoProcesional.json"; // Constante que almacena la API

    fetch(urlPeticion)
        .then(response => response.json())
        .then(data => {
            funcionalidadBotones(data); // Llamada a la función donde se dará funcionalidad a cada botón
        })
        .catch(error => { // Si no se puede acceder a API salta el siguiente error:
            console.error('Hubo un problema con la solicitud: ', error);
        });
}

/** 
 * Función general para dar funcionalidad a todos los botónes de la página, cada uno de ellos
 * llama a su correspondiente función.
*/
function funcionalidadBotones(data) {
    // Añade un evento al botón de mostrar todos los nombres.
    bNombre.addEventListener('click', function () { // Al hacer click
        cNombre.innerHTML = ''; // Hace que no se duplique el contenido
        mostrarNombres(data);
    });

    // Añade un evento al botón de mostrar fotos.
    bFotos.addEventListener('click', function () { // Al hacer click
        cFotos.innerHTML = ''; // Hace que no se duplique el contenido
        mostrarFotos(data);
    });

    // Añade un evento al botón de mostrar los pasos por nombres.
    bNombreFiltrado.addEventListener('click', function () { // Al hacer click
        cNombreFiltrado.innerHTML = ''; // Hace que no se duplique el contenido
        mostrarNombresFiltrados(data);
    });
}


/** 
 * Función para mostrar todas las fotos, junto a los nombres de cada uno de los Pasos
*/
function mostrarFotos(data) {
    // Recorremos el Json y por cada dato creamos una nueva foto, con su nombre correspondiente.
    for (let i = 0; i < data.results.bindings.length; i++) { 
        // Importante, cogemos sólo los valores esenciales, por eso buscamos en data.results.bindings y dentro ya seleccionamos lo que queramos.
        crearFoto(data.results.bindings[i].rdfs_label.value, data.results.bindings[i].schema_image.value, cFotos); // Le pasamos el contenedor de Fotos
    }
}

/** 
 * Función para mostrar todos los nombres.
*/
function mostrarNombres(data) {
    // Recorremos el Json y por cada dato, creamos un LI con la función crearLi()
    for (let i = 0; i < data.results.bindings.length; i++) {
        // Importante, cogemos sólo los valores esenciales, por eso buscamos en data.results.bindings y dentro ya seleccionamos lo que queramos.
        crearLi(data.results.bindings[i].rdfs_label.value, cNombre); // Le pasamos el contenedor de nombre
    }
}


/** 
 * Función para mostrar los nombres filtrados.
*/
function mostrarNombresFiltrados(data) {
    // Creamos un array el cual contendrá todos los valores del Json que cumpla con el if que está a continuación
    let arrayValores = [];
    // Recorremos el Json
    for (let i = 0; i < data.results.bindings.length; i++) { 
        /**
         * Con el if vamos a controlar que la busqueda por nombre, esto significa que, dependiendo de lo que el usuario introduzca
         * si el nombre del Paso contiene alguna letra en común, éste se mostrará. Para ello usamos includes(). Lo que hace includes es
         * comparar los dos, si tienen una letra en común retorna true, si no, false. Tambén es importante usar el toLowerCase() para
         * que no se distingan entre mayúsculas y minúsculas.
         */
        if (data.results.bindings[i].rdfs_label.value.toLowerCase().includes(tNombreFiltrado.value.toLowerCase())) {
            arrayValores.push(data.results.bindings[i].rdfs_label.value); // Introducimos los nombres de los Pasos en el array.
        }
    }

    // Comprobamos que el array no está vacío. Si no lo está entramos en él.
    if (arrayValores) {
        // Ordenamos alfabéticamente el array con el método sort(), por defecto lo hará de la A-Z
        arrayValores.sort();
        // Nos recorremos el Array y llamamos a la función crearLi()
        arrayValores.forEach(element => {
            crearLi(element, cNombreFiltrado); // Le pasamos el elemento (nombre del Paso) y el contenedor donde se mostrará
        });
       
    }
}


/** 
 * Función para crear los LI, le pasan como parámetros la información que contiene el LI y el contenedor donde debe introducirse.
*/
function crearLi(informacionPaso, ul) {
    // Creamos el LI
    let li = document.createElement('li');
    // Introducimos la información
    li.innerText = informacionPaso;
    // Introducimos el LI en el contenedor
    ul.appendChild(li);
}

/** 
 * Función para crear las Fotos, le pasan como parámetros la información que contiene el p que estará arriba de la foto
 * ,el contenedor donde debe introducirse y el src de la foto.
*/
function crearFoto(informacionPaso, foto, div) {
    // Creamos los elementos P e IMG
    let elementoP = document.createElement('p');
    let elementoImg = document.createElement('img');

    // Introducimos a cada elemento su respectiva información
    elementoP.innerHTML = informacionPaso;
    elementoImg.src = foto;

    // Introducimos los elementos al contenedor
    div.appendChild(elementoP);
    div.appendChild(elementoImg);
}


/**
 * Importante: Función que contiene la aplicación general. Desde aquí empieza todo.
 */
peticionAjax();
