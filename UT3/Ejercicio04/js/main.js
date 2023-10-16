/*
    Modifica los estilos desde JavaScript para que el div cumpla:
    1.- Que el box-sizing del div sea “border-box”.
    2.- Que su ancho máximo sea 200px;
    3.- Que tenga como padding en todos lados 50px;
    4.- Que el color del texto sea blanco.
    5.- Que el fondo sea rojo.
 */
let element = document.getElementById("normalDiv");

// 1
element.style.boxSizing = "border-box";

// 2
element.style.width = "200px";

// 3
element.style.padding = "50px";

// 4
element.style.color = "white";

// 5
element.style.backgroundColor = "red";