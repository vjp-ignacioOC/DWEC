'use strict';


/**
 * Importante: He cambiado todas los selectores y botones a "const" para que sean globales y
 * pueda cogerlos en cualquier parte de mi código sin necesidad de pasarlos por parámetros.
 */

//Selectores:
const selectBarra = document.getElementById("selectorBarra");
const selectColor = document.getElementById("selectorColor");
const selectPorcentaje = document.getElementById("selectorPorcentaje");

//Botones:
const bCambiar = document.getElementById("cambiarAjustes");
const bResetear = document.getElementById("resetear");


//Barras: Sobre estos elementos hay que cambiar el estilo.
//Os recuerdo que los estilos están dentro de la propiedad "style" y se utilizan
//las mismas propiedades css pero sin "-" y siempre en minúsculasMayúsculas (camelCase).
//Por ejemplo, para cambiar el color de fondo de la barra1:
// barra1.style.backgroundColor="red";
const barra1 = document.getElementById("barra1");
const barra2 = document.getElementById("barra2");
const barra3 = document.getElementById("barra3");
const barra4 = document.getElementById("barra4");

/**
 * Evento que, al hacer click sobre el botón de cambiar ajustes, llama a la función cambiarBarra()
 * para que, dependiendo de los ajustes que haya introducido el usuario, se cambie la barra.
 */
bCambiar.addEventListener('click', function() { // Haciendo click
    cambiarBarra(); // Función para cambiar la barra.
});

/**
 * Esta función se utiliza para cambiar la barra según las características que haya introducido el
 * usuario. Para ello, se declaran las variables con cada ajuste posible y se llaman a las demás funciones
 * que cambiarán las diferentes cosas.
 */
function cambiarBarra() {
    // Variable que contiene el valor de la barra que el usuario ha seleccionado.
    let numBarra = selectBarra.value;
    // Variable que contiene el color que el usuario ha seleccionado.
    let colorBarra = selectColor.value;
    // Variable que contiene el ancho que el usuario ha seleccionado
    let porcentajeAncho = selectPorcentaje.value;

    // Llamada a la función para cambiar el color de la barra.
    cambiarColor(numBarra, colorBarra);

    // Llamada a la función para cambiar el ancho de la barra.
    cambiarPorcentaje(numBarra, porcentajeAncho);

}

/** 
 * Función para cambiar el color de la barra, le pasan por parámetros dos valores, el primero
 * numBarra, que hace referencia al número de la tabla que ha seleccionado el usuario y el segundo
 * colorBarra que hace referencia al color que el usuario ha seleccionado.
*/
function cambiarColor(numBarra, colorBarra) {
    // Almacenamos la barra que el usuario ha seleccionado
    const barraSeleccionada = document.getElementById(`barra${numBarra}`); 
    // Cambiamos el color de la barra
    barraSeleccionada.style.backgroundColor = colorBarra;
}

/** 
 * Función para cambiar el ancho de la barra, le pasamos dos parámetros, uno el numBarra que hace
 * referencia al número de la barra y el segundo el ancho, que hace referencia al ancho que ha 
 * seleccionado el usuario
*/
function cambiarPorcentaje(numBarra, porcentajeAnchoBarra) {
    // Si es mayor a 100 o menor a 0 salta el alert, si no, modifica el ancho.
    if (porcentajeAnchoBarra > 100 || porcentajeAnchoBarra < 0) { 
        alert('Introduce un número válido entre 100 y 0.');
    } else {
        // Almacenamos la barra que el usuario ha seleccionado
        const barraSeleccionada = document.getElementById(`barra${numBarra}`);
         // Cambiamos el ancho de la barra
        barraSeleccionada.style.width = porcentajeAnchoBarra + '%';
    }
}

/**
 * Evento que, al hacer click sobre el botón resetear llamará a la función resetearCampos()
 * que resetea todos los campos.
 */
bResetear.addEventListener('click', function() {
    resetearCampos();
});

/**
 * La función resetearCampos, resetear los campos de todas las barras, sin importar el estilo
 * de cada una.
 */
function resetearCampos() {
    // Introducimos todas las barras en un Array
    let barras = [barra1, barra2, barra3, barra4];
    // Nos recorremos el array de barras, para que, en cada una de ellas se ejecute la función
    barras.forEach(element => { 
        resetearCaposDobleClick(element); 
    });
}

/** 
 * Esta función recibe por parametros el elemento(la barra) y le cambia los estilos a los default
*/
function resetearCaposDobleClick(element) {
    element.style.width = '50%';
    element.style.backgroundColor = 'grey';
}

/**
 * Importante: Esto se ejecuta siempre, a las 4 barras 
 */
// Introducimos todas las barras en un Array
let barras = [barra1, barra2, barra3, barra4];
// Nos recorremos el array de barras, para que, en cada una de ellas se haga un evento nuevo, 'dblclick'
barras.forEach(element => {
    element.addEventListener('dblclick', function(){
        resetearCaposDobleClick(element);
    });
});