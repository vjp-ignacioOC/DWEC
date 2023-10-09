/*
    Crea una función procesarArray que realice los siguientes pasos:
	a) Checkea que todos los elementos son de tipo número. Si no, termina con alert(“Error”).
    b) En caso afirmativo modifica el valor del array multiplicando cada elemento por 2. (se debe almacenar sobre el mismo array).
    c) Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje por pantalla de éxito, en caso contrario, de error.
 */

function procesarArray(array) {
    // a)
    for (i = 0; i < array.length; i++){
        if (typeof array[i] !== "number") {
            console.log("Error. No todos los elementos del array son números.");
        } else {
            // b)
            console.log(array.filter(num => num*2));
            // c)
            if (array[i] % 2 == 0) {
                console.log("Éxito. Todos son pares.");
            } else {
                console.log("Fracaso. No son todos pares");
            }
        }
    }
}

