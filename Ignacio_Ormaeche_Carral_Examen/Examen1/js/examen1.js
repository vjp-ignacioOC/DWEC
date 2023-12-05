'use strict';

//Selectores:
let selectBarra = document.getElementById("selectorBarra");
let selectColor = document.getElementById("selectorColor");
let selectPorcentaje = document.getElementById("selectorPorcentaje");

//Botones:
let bCambiar = document.getElementById("cambiarAjustes");
let bResetear = document.getElementById("resetear");


//Barras: Sobre estos elementos hay que cambiar el estilo.
//Os recuerdo que los estilos están dentro de la propiedad "style" y se utilizan
//las mismas propiedades css pero sin "-" y siempre en minúsculasMayúsculas (camelCase).
//Por ejemplo, para cambiar el color de fondo de la barra1:
// barra1.style.backgroundColor="red";

let barra1 = document.getElementById("barra1");
let barra2 = document.getElementById("barra2");
let barra3 = document.getElementById("barra3");
let barra4 = document.getElementById("barra4");

// Le damos funcionalidad al botón de reset que, cuando pulses, recargue la página entera
bResetear.addEventListener('click', function() {
    window.location.reload();
})

// Le damos funcionalidad al boton de cambiar ajustes, llamando a la funcion cambiarAjustes
bCambiar.addEventListener('click', function () {
    if (selectPorcentaje.value > 100 || selectPorcentaje.value < 0) {
        alert('error');
    }else {
        cambiarAjustes();
    }

})


// Hacemos que con doble click sobre las barras, vuelvan a su posición inicial
barra1.addEventListener('dblclick', function(event) {
    reiniciarBarra(event);
})
barra2.addEventListener('dblclick', function(event) {
    reiniciarBarra(event);
})
barra3.addEventListener('dblclick', function(event) {
    reiniciarBarra(event);
})
barra4.addEventListener('dblclick', function(event) {
    reiniciarBarra(event);
})

// Con esta función retornamos la barra que queramos seleccionar
function seleccionarBarra() {
    let seleccionado;
    if (selectBarra.value === '1') {
        seleccionado = barra1;
    } else if (selectBarra.value === '2') {
        seleccionado = barra2;
    } else if(selectBarra.value === '3') {
        seleccionado = barra3;
    } else {
        seleccionado = barra4;
    }
    return seleccionado;
}

// Cambiamos los aajustes, dependiendo del color que escojamos y añadiendo un porcentaje a la barra
function cambiarAjustes() {
    let seleccionado = seleccionarBarra();
    if (selectColor.value === 'red') {
        seleccionado.style.backgroundColor = 'red';
    } else if (selectColor.value === 'green') {
        seleccionado.style.backgroundColor = 'green';
    } else if(selectColor.value === 'blue') {
        seleccionado.style.backgroundColor = 'blue';
    } else {
        seleccionado.style.backgroundColor = 'yellow';
    }
    // Entiendo que aquí debería ir un if() para que saltase una alerta cuando fuese mayor al 100%,pero no sé por qué no soy capaz de que me salga bien
    seleccionado.style.width = selectPorcentaje.value + '%';

}

// Reiniciamos las barras añadiendo el color y el porcentaje inicial
function reiniciarBarra(event) {
    event.target.style.backgroundColor = 'grey';
    event.target.style.width = '50%';
}

//Está un pocochapucero, la verdad, soy consciente, pero bueno, quitando el alert, todo lo demás está hecho.