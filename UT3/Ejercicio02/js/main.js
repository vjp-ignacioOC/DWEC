/*
    1.- Selecciona el primer enlace (“a”) que cuelgue que #div1.
    Pinta su atributo title (.getAttribute(“title”) o .title) por pantalla.
 */

let elemento = document.getElementById("div1");
let elemento2 = elemento.querySelector("a");
//Otra opción: let elemento = document.querySelector("#div1 a:first-child");
console.log("1.- " + elemento2.title);

/*
    2.- Selecciona un enlace (“a”) que sea hijo inmediato de cualquier div.
    [Debería fallar]. Porque el hijo inmediato de div, en este caso, es un h1
 */
let elemento3 = document.querySelector("div > a");
console.log("2.- " + elemento3);

/*
    3.- Selecciona el enlace que sea hijo de primer nivel de un párrafo, que sea hijo de primer nivel de #div1.
    Muestra por pantalla su contenido.
 */

let elemento4 = document.querySelector("#div1 > p > a");
console.log("3.- " + elemento4.getAttribute("title"));

/*
    4.- Selecciona el segundo elemento de la clase “linkNormal”.
    Muestra por consola su enlace.
 */

let elemento5 = document.querySelector("a:nth-child(2)");
console.log("4.- " + elemento5);

/*
    5.- Selecciona un elemento de la clase “linkNormal” cuyo atributo title empiece por “Spider”.
    Muestra por pantalla de qué tipo es ese nodo y cuál es su contenido HTML (innerHTML).
 */

let elemento6 = document.querySelector(".linkNormal[title^=Spider]");
console.log("5.- " + elemento6.nodeName + " / " + elemento6.innerHTML);

/*
    6.- Selecciona el elemento siguiente de tipo “a” que es hermano de un elemento de la clase “linkNormal” cuyo atributo title empieza por “Spider”.
    Píntalo por consola.
 */

let elemento7 = document.querySelector(".linkNormal[title^=Spider] + a");
console.log("6.- " +elemento7);

/*
    7.- Pinta por pantalla todos los “titles” de los elementos que sean de la clase “linkNormal”.
 */

let elemento8 = document.querySelectorAll(".linkNormal");
elemento8.forEach(element => {
    console.log("7.- " +element.getAttribute("title"));
});

/*
    8.- Pinta todos los elementos “a” que sean hermanos (anteriores y posteriores) del enlace que tenga como título “Spiderman”.
 */

let elemento9 = document.querySelectorAll("a +.linkNormal[title=Siderman]");
elemento9.forEach(element => {
    console.log("8.- " + element);
});