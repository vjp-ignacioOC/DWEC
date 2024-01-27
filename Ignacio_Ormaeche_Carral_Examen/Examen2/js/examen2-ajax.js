'use strict';


let bNombre = document.getElementById("botonNombre");
let cNombre = document.getElementById("contenedorNombres");


let bFotos = document.getElementById("botonFotos");
let cFotos = document.getElementById("contenedorFotos");


let tNombreFiltrado = document.getElementById("filtrarNombre");
let bNombreFiltrado = document.getElementById("botonFiltrarNombre");
let cNombreFiltrado = document.getElementById("contenedorNombresFiltrados");

let urlPeticion = "https://raw.githubusercontent.com/jesusredondo/PracticaBuscaminas-BASE18-19/master/json/PasoProcesional.json";

//Creamos la clase Paso para agregarleun constructor y que nos sea más fácilmanejarel código
class Paso {
    constructor (objPaso) {
        this.nombre = objPaso.rdfs_label.value;
        this.img = objPaso.schema_image.value;
    }

    getNombre() {
        return this.nombre;
    }

    getImg() {
        return this.img;
    }
}

// Creamos la función principal con un fetch donde llamamos al método mostrarInfo y, si da algún error, que nos salte el catch
function sacarInfo() {
    fetch(urlPeticion)
        .then(response => response.json())
        .then(data => {
            mostrarInformacion(data)
        })
        .catch(error => {
            console.log('Hubo un problema con la petición', error);
        })
}

//En este método tenemos la funcionalidad de la página
function mostrarInformacion(data) {
    //Primerocreamos un array de pasos y,mediante un foEach, creamos cad auno de los pasos que están en el Json
    // let pasosJson = [];
    // data.results.bindings.forEach(elemento => {
    //     let paso = new Paso(elemento);
    //     pasosJson.push(paso);
    // })

    //Le damos funcionalidad a los diferentes botones
    bNombre.addEventListener('click', function() {
        mostrarNombre(data);
        //Con esto, hacemos que solose pueda dar albotón 1 vez, lo deshabilita
        this.disabled = true;
    });
    bFotos.addEventListener('click', function() {
        mostrarNombreConImagen(data);
        this.disabled = true;
    });
    bNombreFiltrado.addEventListener('click', function() {
        mostrarNombresSegunParametro(data);
        this.disabled = true;
    });

}
function recorrerPasos(data) {
    let pasosJson = [];
    data.results.bindings.forEach(elemento => {
        let paso = new Paso(elemento);
        pasosJson.push(paso);
    });
    return pasosJson;
}
//hacemos un forEach para mostrar los nombres de los distintos pasos
function mostrarNombre(data) {
    let pasos = recorrerPasos(data);
    pasos.forEach(element => {
        crearLi(element.getNombre(), cNombre);
    });
}

//Hacemos un forEach para mostrar el nombre y la imagen de los distintos pasos
// No sé por qué, pero solo me muestra uno
// function mostrarNombreConImagen(data) {
//     data.forEach(element => {
//         let paso = `<p> ${element.getNombre()} </p>
// <img src="${element.getImg()}">`;
//         cFotos.innerHTML = paso;
//     });
//
// }
function mostrarNombreConImagen(data) {
    let pasos = recorrerPasos(data);
    for (let i = 0; i < pasos.length; i++) {
        let element = pasos[i];
        let paso = `<p> ${element.getNombre()} </p>
                    <img src="${element.getImg()}">`;
        cFotos.innerHTML += paso;  // Se utiliza '+=' para agregar a la propiedad innerHTML en lugar de sobrescribirla
    }
}


// Hacemos que nos muestre losnombres ordenados alfabéticamente gracias al sort()
// function mostrarNombresSegunParametro(data) {
//     // Creamos un array, lo ordeamos,y luego creamos las distintas li
//     let nombresPasos = [];
//     data.forEach(element => {
//         nombresPasos.push(element.getNombre());
//     });
//     nombresPasos.sort();
//     for (let i = 0; i < nombresPasos.length; i++) {
//         crearLi(nombresPasos[i], cNombreFiltrado);
//     }
// // Debería sacar los nombres qe le des según parámetro, perono sé cómo hacerlo, supongo que sería algo como if ( tNombreFiltrado.value === algo aquí) pues que lo muestre
// }
function mostrarNombresSegunParametro(data) {
    // Creamos un array el cual contendrá todos los valores del Json que cumpla con el if que está a continuación
    let arrayValores = [];
    let nombresPasos = [];
    // Recorremos el Json
    for (let i = 0; i < data.results.bindings.length; i++) {
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
    } else {
        data.forEach(element => {
            nombresPasos.push(element.getNombre());
        });
        nombresPasos.sort();
        for (let i = 0; i < nombresPasos.length; i++) {
            crearLi(nombresPasos[i], cNombreFiltrado);
        }
    }
}

// Esta función sirve para crear los diferentes li de los nombres de los pasos
function crearLi (nombre, ul) {
    let li = document.createElement('li');
    li.innerText = nombre;
    ul.appendChild(li);
}

// Lamamos a la función prncpial para dar funcionalidad a la página
sacarInfo();