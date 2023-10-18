/*  EJERCICIO 5
    1.- El div tenga un tamaño de 200x200, el color de fondo sea gris (#9e9e9e), la letra sea azul y el borde tenga 1 pixel de grosor y de color rojo.
    2.- Cuando se redimensione la ventana, dentro del div se pintará el window.innerWidth y el window.innerHeight.
    3.- Utiliza el evento DOMContentLoaded para que todo el código se ejecute cuando se cargue el DOM

 */

// 3.-
// document.addEventListener('DOMContentLoaded' , function () {
//
// let elemento = document.getElementById("contenedorGeneral");
//
// // 1.-
// elemento.style.width = "200px";
// elemento.style.height = "200px";
// elemento.style.backgroundColor = "#9e9e9e";
// elemento.style.border = "1px solid red";
//
// // 2.-
// window.addEventListener("resize" , function () {
//     elemento.innerHTML = "" + window.innerWidth+ " - " +window.innerHeight;
// });
//
// window.onbeforeunload = function () {
//     return "Se cierra con un mensaje";
// };
// });




/*  EJERCICIO 6.1
    Partiendo del código expuesto y a través de javascript genera una matriz de 10 x 10 en la que al pulsar sobre cada elemento pueda cambiar de color (rojo, azul, verde, amarillo):
    Si pulsamos el botón izquierdo del ratón el color irá cambiando en el sentido que se ha expuesto los colores.
    Si pulsamos el botón derecho del ratón el color irá cambiando en el sentido opuesto.
    Si se pulsa el botón de la ruleta se pone gris.
    El botón tendrá un tamaño de 25px para el ancho y el alto.
    Habrá una separación entre elementos de 10px.
 */


let contenedorGeneral = document.getElementById("contenedorGeneral");
contenedorGeneral.style.width = "450px";
function crearMatriz() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
           let boton = document.createElement("button");
           boton.style.margin = "10px";
           boton.style.width = "25px";
           boton.style.height = "25px";
           contenedorGeneral.appendChild(boton);
        }
    }
}
crearMatriz();




