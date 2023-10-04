/*
    Crea una función que reciba dos cadenas.
    Comprobará que ambos argumentos son cadenas y en caso afirmativo pintará mediante console.log si una cadena es igual a la otra del revés.
    Prueba con varias entradas.
 */

function comprobarCadenas (cadena1, cadena2) {
    if (typeof cadena1 === "string" && typeof cadena2 === "string") {
        let separarCadena2 = cadena2.split("");
        let invertirCadena2 = separarCadena2.reverse();
        let unirCadena2 = invertirCadena2.join("");
        if (cadena1 === unirCadena2) {
            console.log("La cadena1 y el reverso de la cadena2 son iguales");
        } else {
            console.log("La cadena1 y el reverso de la cadena2 NO son iguales");
        }
    }
}

let cadena1 = "hola";
let cadena2 = "aloh";

comprobarCadenas(cadena1, cadena2);
