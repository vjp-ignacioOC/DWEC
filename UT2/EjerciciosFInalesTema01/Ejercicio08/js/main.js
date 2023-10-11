/*
    Crea una función procesarArray que realice los siguientes pasos:
	a) Checkea que todos los elementos son de tipo número. Si no, termina con alert(“Error”).
    b) En caso afirmativo modifica el valor del array multiplicando cada elemento por 2. (se debe almacenar sobre el mismo array).
    c) Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje por pantalla de éxito, en caso contrario, de error.
 */

function procesarArray(array) {
    // a)
    let esNumero = true;
    let i = 0;
    while (i < array.length && esNumero){
        if (typeof array[i] !== "number") {
            alert("Error. No todos los elementos del array son números.");
            esNumero = false;
        }
        if (esNumero){
            // b)
            console.log(array.filter(num => num*2));
        }
        i++;
    }
    // c)
    if (array % 2 == 0) {
        alert("EXITO.Todos los números son pares.")
    } else {
        alert("FRACASO. No todos los números son pares.")
    }

}

let array = new Array(2, 6, 4);
procesarArray(array);
