/*
    1.- Crea una función que reciba dos cadenas y pinte cuál es la más corta de las dos.
    Si alguno de los dos argumentos no es una cadena devuelve un mensaje de error en su lugar.
    Probarlo con varias entradas directamente introducidas con código.
    Las salidas se harán con console.log.
 */

function pintarLaMasCorta (cadena1, cadena2) {
    if (typeof cadena1 === "string" && typeof cadena2 === "string") {
        return cadena1 < cadena2 ? cadena1:cadena2;
    } else {
        return "Error, una de las 2 cadenas no es un string";
    }

}
let cadena1 = "hola";
let cadena2 = 12;
let cadenaCorta = pintarLaMasCorta(cadena1, cadena2);
console.log(cadenaCorta);
