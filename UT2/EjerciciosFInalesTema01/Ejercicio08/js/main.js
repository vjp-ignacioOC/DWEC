/*
    Crea una función procesarArray que realice los siguientes pasos:
	a) Checkea que todos los elementos son de tipo número. Si no, termina con alert(“Error”).
    b) En caso afirmativo modifica el valor del array multiplicando cada elemento por 2. (se debe almacenar sobre el mismo array).
    c) Por último comprueba que todos los elementos son pares. Si es así muestra un mensaje por pantalla de éxito, en caso contrario, de error.
 */

let array = ["aa", 2, 4, 6];

function procesarArray(array) {
    array.forEach(elemento => {
        if (typeof elemento != "number") {
            return alert("Error.");
        } else {
            return array.push(elemento * 2);
        }
    });

    let comprobar = array.every(num => num % 2 === 0);
    if (!comprobar) {
        console.log("Su array no ha sido exitoso.");
    } else {
        console.log("Su array ha sido exitoso.");
    }

    return array
}

console.log(procesarArray(array));