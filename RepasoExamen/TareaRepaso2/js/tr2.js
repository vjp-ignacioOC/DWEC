'use strict';

let contIzquierda = document.getElementById("contenedorIzquierda");
let contDerecha = document.getElementById("contenedorDerecha");

let botonIzq = document.getElementById("moverIzquierda");
let botonDer= document.getElementById("moverDerecha");
let botonLimpiar = document.getElementById("limpiar");


let inputTexto = document.getElementById("nuevaEntrada");
let botonCrear = document.getElementById("creaEntrada");


function crearEntrada() {
    //Añadimos el evento de, cuando escribamos algo en el input, cree la nueva entrada y la suba al contenedor izquierdo
    botonCrear.addEventListener('click', function () {
        let nuevoLi = document.createElement('li');
        nuevoLi.innerHTML = `${inputTexto.value}`;
        if (inputTexto.value !== '') {
            contIzquierda.appendChild(nuevoLi);
            inputTexto.value = "";
            // inputTexto.focus();
        } else {
            alert('Debes añadir una entrada.')
        }
    });

    // Llamamos al método seleccionar para, cuando hagas click, que se seleccionen y se pinten de rojo
    contIzquierda.addEventListener('click', function(event) {
        seleccionarEntradas(event)
    });
    contDerecha.addEventListener('click', function(event) {
        seleccionarEntradas(event)
    });

    // Llamamos al método cambiarEntradas para, todas aquellas que estén seleccionadas, se cambien según el botón al que le des
    botonDer.addEventListener('click', function (){
        cambiarEntradasDeLado(contDerecha)
    });
    botonIzq.addEventListener('click', function () {
        cambiarEntradasDeLado(contIzquierda)
    });

    //Limpiamos todos las palabras seleccionados
    botonLimpiar.addEventListener('click', function () {
        limpiarSeleccionados()
    });

    //Borramos cualquier elemento
    contIzquierda.addEventListener('dblclick', function(event) {
        borrarElemento(event);
    })
    contDerecha.addEventListener('dblclick', function(event) {
        borrarElemento(event);
    })

}

function seleccionarEntradas(event) {
    let colorOriginal = '';
    if (event.target.tagName === 'LI') {
        if (event.target.classList.contains('seleccionado')) {
            event.target.classList.remove('seleccionado');
        } else {
            event.target.classList.add('seleccionado');
        }
    }
}

function cambiarEntradasDeLado(contenedor) {
    let listado = document.querySelectorAll("li[class*=seleccionado]");
    for (let i = 0; i < listado.length; i++) {
        contenedor.appendChild(listado[i]);
    }
}

function limpiarSeleccionados() {
    let listado = document.querySelectorAll("li[class*=seleccionado]");
    let colorOriginal = '';
    for (let i = 0; i < listado.length; i++) {
        listado[i].classList.remove('seleccionado');
        listado[i].style.backgroundColor = colorOriginal;
    }
}

function borrarElemento(event) {
    event.target.remove();
}

crearEntrada()
