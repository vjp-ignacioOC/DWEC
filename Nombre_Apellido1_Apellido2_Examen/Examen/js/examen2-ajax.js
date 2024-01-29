'use strict';

//Contenedores:
let contenedorPendientes = document.querySelector('#pendiente');
let contenedorLeyendo = document.querySelector('#leyendo');
let contenedorCompletado = document.querySelector('#completado');
//Filtro
let searchFiltro = document.getElementById("filtro");
let contenedorOrdenAnio = document.getElementById("ordenAnio");
let bAnio = document.getElementById("botonTitulo");
let urlJson = 'https://raw.githubusercontent.com/fsangar/PracticaBuscaminas-BASE18-19/master/json/comics.json';

class Comic {
    constructor(objComic) {
        this.id = objComic.id;
        this.titulo = objComic.titulo;
        this.estado = objComic.estado;
        this.descripcion = objComic.descripcion;
        this.editorial = objComic.editorial;
        this.anio = objComic.anio;
        this.foto = objComic.foto;
    }

    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }

    getEstado() {
        return this.estado;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getEditorial() {
        return this.editorial;
    }

    getAnio() {
        return this.anio;
    }

    getFoto() {
        return this.foto;
    }
}

function recorrerComics(data) {
    let comics = [];
    data.comics.forEach(elemento => {
        let comic = new Comic(elemento);
        comics.push(comic);
    });
    return comics;
}
function sacarInfo() {
    fetch(urlJson)
        .then(response => response.json())
        .then (data => {
            mostrarInfo(data)
        })
        .catch(error => {
            console.log('Error al cargar la petición', error);
        })
}

function mostrarInfo(data) {
    mostrarComics(data);
    filtradoInput(data);

    bAnio.addEventListener('click', function () {
        mostrarFiltradosAnio(data);
    })
}

function mostrarComics(data) {
    for (let i = 0; i < data.comics.length; i++) {
        if(data.comics[i].estado === 'pendiente') {
            contenedorPendientes.innerHTML = `
            <div class="comic">
                <h2>${data.comics[i].titulo}</h2>
                <img src="${data.comics[i].foto}">
                <p>${data.comics[i].descripcion} </p>
                <p><span>Año: </span>${data.comics[i].anio} </p>
                <p><span>Editorial: </span>${data.comics[i].editorial} </p>
            </div>
            `;
        } else if (data.comics[i].estado === 'leyendo') {
            contenedorLeyendo.innerHTML = `
            <div class="comic">
                <h2>${data.comics[i].titulo}</h2>
                <img src="${data.comics[i].foto}">
                <p>${data.comics[i].descripcion} </p>
                <p><span>Año: </span>${data.comics[i].anio} </p>
                <p><span>Editorial: </span>${data.comics[i].editorial} </p>
            </div>
            `;
        } else if (data.comics[i].estado === 'completado') {
            contenedorCompletado.innerHTML = `
            <div class="comic">
                <h2>${data.comics[i].titulo}</h2>
                <img src="${data.comics[i].foto}">
                <p>${data.comics[i].descripcion} </p>
                <p><span>Año: </span>${data.comics[i].anio} </p>
                <p><span>Editorial: </span>${data.comics[i].editorial} </p>
            </div>
            `;
        }
    }
}

function ordernarPorAnio(data) {
    let ordenado = [];
    let comics = recorrerComics(data);
    for (let i = 0; i < comics.length; i++) {
        if(comics[i].anio > comics[i+1].anio) {
            ordenado.push(comics[i+1]);
        } else {
            ordenado.push(comics[i]);
        }
    }
    return ordenado;
}

function mostrarFiltradosAnio(data) {
    let comics = ordernarPorAnio(data);
    contenedorOrdenAnio.innerHTML = `
        <div class="comic">
                <h2>${comics[i].titulo}</h2>
                <img src="${comics[i].foto}">
                <p>${comics[i].descripcion} </p>
                <p><span>Año: </span>${comics[i].anio} </p>
                <p><span>Editorial: </span>${comics[i].editorial} </p>
            </div>
    `;
}


function ordenarPorTitulo() {

}



function borrarContenedores() {
    contenedorPendientes.innerHTML = '';
    contenedorCompletado.innerHTML = '';
    contenedorLeyendo.innerHTML = '';
}

//FILTRAR CÓMICS:
/**
 * Filtrar el array de comics, teniendo en cuenta los que tengan esa parte de texto (Expresión Regular) en su título).
 * Los que pasen el filtro se colocan mediante "colocarComics"
 */
function filtradoInput(data) {

    let arrayValores = [];

    for(let i = 0; i < data.comics.length; i++) {
        if(data.comics[i].titulo.toLowerCase().includes(searchFiltro.value.toLowerCase())) {
            arrayValores.push(data.comics[i].titulo)
        }
    }

    if(arrayValores) {
        for (let i = 0; i < arrayValores.length; i++) {
            if (arrayValores[i].estado === 'pendiente') {
                contenedorPendientes.innerHTML = `
                <div class="comic">
                    <h2>${arrayValores[i].titulo}</h2>
                    <img src="${arrayValores[i].foto}">
                    <p>${arrayValores[i].descripcion} </p>
                    <p><span>Año: </span>${arrayValores[i].anio} </p>
                    <p><span>Editorial: </span>${arrayValores[i].editorial} </p>
                </div>
                `;
            } else if (arrayValores[i].estado === 'leyendo') {
                contenedorLeyendo.innerHTML = `
                <div class="comic">
                    <h2>${arrayValores[i].titulo}</h2>
                    <img src="${arrayValores[i].foto}">
                    <p>${arrayValores[i].descripcion} </p>
                    <p><span>Año: </span>${arrayValores[i].anio} </p>
                    <p><span>Editorial: </span>${arrayValores[i].editorial} </p>
                </div>
                `;
            } else if (arrayValores[i].estado === 'completado') {
                contenedorCompletado.innerHTML = `
                <div class="comic">
                    <h2>${arrayValores[i].titulo}</h2>
                    <img src="${arrayValores[i].foto}">
                    <p>${arrayValores[i].descripcion} </p>
                    <p><span>Año: </span>${arrayValores[i].anio} </p>
                    <p><span>Editorial: </span>${arrayValores[i].editorial} </p>
                </div>
                `;
            }
        }
    }

}


//CAMBIAR EL COLOR DEL BOTÓN:
/**
 * Cambia el color del botón que se pasa por parámetro de entrada.
 * Se utilizan dos eventos una que permite coger que el mouse está sobre el botón (cambia a amarillo)
 * y otro que devuelve el color original cuadno se deja de estar sobre el botón
 */

function changeColorButtonHover (boton){
    //TODO
}

sacarInfo();