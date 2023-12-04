'use strict';
/**
 * + Constantes que almacenan todos los botones y contenedores del HTML. (Son globales).
 */
const contIzquierda = document.getElementById("contenedorIzquierda");
const contDerecha = document.getElementById("contenedorDerecha");

const botonIzq = document.getElementById("moverIzquierda");
const botonDer = document.getElementById("moverDerecha");
const botonLimpiar = document.getElementById("limpiar");

const colorOriginal = '';
const inputTexto = document.getElementById("nuevaEntrada");
const botonCrear = document.getElementById("creaEntrada");


/**
 * + Todos los addEventListener que utilizaremos para la funcionalidad de la web.
 */

/**
 * - 1. Botón para crear una nueva entrada dentro de la parteIzquierda de los contenedores.
 */
botonCrear.addEventListener('click', function () {
    introducirNuevaEntrada(inputTexto, contIzquierda);
});

/**
 * - 2. Estos dos EventListener se utilizan para poder seleccionar y deseleccionar un li (entrada) de 
 * - cada uno de los contenedores.
 */
contDerecha.addEventListener('click', function (event) {
    seleccionarContenido(event);
});
contIzquierda.addEventListener('click', function (event) {
    seleccionarContenido(event);   
});

/**
 * - 3. Estos dos EventListener se utilizan para mover de un contenedor a otro las diferentes entradas (li) 
 * - que están previamente seleccionadas.
 */
botonIzq.addEventListener('click', function () {
    mover(contIzquierda);
});

botonDer.addEventListener('click', function () {
    mover(contDerecha);
});

/**
 * - 4. Este botón tiene la función de borrar todo lo que previamente está seleccionado dando click.
 */
botonLimpiar.addEventListener('click', function() {
    limpiarSeleccionados();
});

/**
 * - 5. Estos dos EventListener tienen la funcionalidad de que, cada vez que hagas doble click sobre un 
 * - li (entrada) ésta se elimine.
 */
contDerecha.addEventListener('dblclick', function (event) { // dblclick: Importante para que, al hacer doble click pase un evento
    eliminarContenido(event);
});
contIzquierda.addEventListener('dblclick', function (event) {
    eliminarContenido(event);
});


/**
 * + Todas las funciones utilizadas en los addEventListener que complementan la funcionalidad de la web.
 */

/**
 * - 1. Función que complementa al primer EventListener. El botón de crear una nueva entrada, su funcionamiento es fácil:
 * - Primero comprueba que no está vacío, si no lo está, entra en el if, crea un nuevo elemento li, le inserta el texto que le
 * - han pasado por parámetros y lo introduce en el contenedor que haya sido pasado, después pone el input de nuevo vacío.
 * - Si está vacío salta un alert avisando.
 */
function introducirNuevaEntrada(inputTexto, contenedor) {
    if (inputTexto.value !== '') {
        const nuevoLi = document.createElement('li');
        nuevoLi.innerText = inputTexto.value;
        contenedor.appendChild(nuevoLi);
        inputTexto.value = '';
    } else {
        alert('Introduce un texto antes.');
    }
}

/**
 * - 2. Función que complementa al segundo EventListener. Recibe por parámetros el evento, comprueba que sea un LI y después 
 * - comprueba que tenga la clase seleccionado, si la tiene, la remueve, si no la tiene, la añade.
 */
function seleccionarContenido(event) {
    if (event.target.tagName === "LI") {
        if (event.target.classList.contains("seleccionado")) { // Importante para saber si el target contiene la clase Seleccionado
            event.target.classList.remove('seleccionado');
        } else {    
            event.target.classList.add('seleccionado');
        }
    } 
}

/**
 * - 3. Función que complementa al tercer EventListener. Recibe por parámetros el contenedor, selecciona con un QuerySelectorAll
 * - todos los LI que tengan la clase seleccionado y las recorre, metiendo cada una de ellas en el contenedor que le hemos pasado
 * - por parámetros.
 */
function mover(contenedor) {
    let listasSelecciondos = document.querySelectorAll('li[class*=seleccionado]');

    for (let i = 0; i < listasSelecciondos.length; i++) {
        contenedor.appendChild(listasSelecciondos[i]);
    }

}

/**
 * - 4. Función que complementa al cuarto EventListener. Selecciona todos los LI que tienen la clase Seleccionado, 
 * - y después las remueve una por una.
 */
function limpiarSeleccionados() {
    let listasSelecciondos = document.querySelectorAll('li[class*=seleccionado]');

    for (let i = 0; i < listasSelecciondos.length; i++) {
        listasSelecciondos[i].classList.remove('seleccionado');
    }
}

/**
 * - 4. Función que complementa al quinto EventListener. Recibe por parámetros el evento, y lo borra.
 */
function eliminarContenido(event) {
    event.target.remove();
}