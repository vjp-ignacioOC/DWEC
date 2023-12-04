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
    let pasosJson = [];
    data.results.bindings.forEach(elemento => {
        let paso = new Paso(elemento);
        pasosJson.push(paso);
    })

    //Le damos funcionalidad a los diferentes botones
    bNombre.addEventListener('click', function() {
        mostrarNombre(pasosJson);
        //Con esto, hacemos que solose pueda dar albotón 1 vez, lo deshabilita
        this.disabled = true;
    });
    bFotos.addEventListener('click', function() {
        mostrarNombreConImagen(pasosJson);
        this.disabled = true;
    });
    bNombreFiltrado.addEventListener('click', function() {
        mostrarNombresSegunParametro(pasosJson);
        this.disabled = true;
    })

}

//hacemos un forEach para mostrar los nombres de los distintos pasos
function mostrarNombre(data) {
    data.forEach(element => {
        crearLi(element.getNombre(), cNombre);
    });
}

//Hacemos un forEach para mostrar el nombre y la imagen de los distintos pasos
// No sé por qué, pero solo me muestra uno
function mostrarNombreConImagen(data) {
    data.forEach(element => {
        let paso = `<p> ${element.getNombre()} </p>
<img src="${element.getImg()}">`;
        cFotos.innerHTML = paso;
    });

}

// Hacemos que nos muestre losnombres ordenados alfabéticamente gracias al sort()
function mostrarNombresSegunParametro(data) {
    // Creamos un array, lo ordeamos,y luego creamos las distintas li
    let nombresPasos = [];
    data.forEach(element => {
        nombresPasos.push(element.getNombre());
    });
    nombresPasos.sort();
    for (let i = 0; i < nombresPasos.length; i++) {
        crearLi(nombresPasos[i], cNombreFiltrado);
    }
// Debería sacar los nombres qe le des según parámetro, perono sé cómo hacerlo, supongo que sería algo como if ( tNombreFiltrado.value === algo aquí) pues que lo muestre
}

// Esta función sirve para crear los diferentes li de los nombres de los pasos
function crearLi (nombre, ul) {
    let li = document.createElement('li');
    li.innerText = nombre;
    ul.appendChild(li);
}

// Lamamos a la función prncpial para dar funcionalidad a la página
sacarInfo();