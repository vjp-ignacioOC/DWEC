/*
    Crea una función a la cual se le pase un array. Esta función devolverá:
        Cuántos elementos hay de tipo número y los pintará por pantalla.
        Cuántos elementos hay de tipo cadena y los pintará por pantalla.
        Cuántos elementos no son ni número ni cadena y los pintará por pantalla.
    Prueba la ejecución con varias entradas.

 */

function devolverValores(array) {
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            console.log(array[i] + " es un string.");
        } else if (typeof array[i] === "number") {
            console.log(array[i] + " es un número");
        } else {
            console.log(array[i] + " no es ni string ni número");
        }
    }
}
 let array = new Array(1,2,3,"hola", 4, 5, "que", 6, 7, "tal", true);

devolverValores(array);