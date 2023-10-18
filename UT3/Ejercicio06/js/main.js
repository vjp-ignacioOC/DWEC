document.addEventListener("DOMContentLoaded", main) ;
function main () {
    // div Rojo
    document.getElementById("divRojo").addEventListener(
        "click", (evento) =>
        {console.log("Pulsaste el divRojo")}
    );
    // div Azul
    document.getElementById("divAzul").addEventListener(
        "click", function (evento) {
            evento.stopPropagation();
            console.log("Pulsaste el divAzul")
        }
    );
}

// El ejercicio 1) del 6 es añadiendo el true:  document.getElementById("divAzul").addEventListener(
//         "click", (evento) =>
//         {console.log("Pulsaste el divAzul")}, true
//     );