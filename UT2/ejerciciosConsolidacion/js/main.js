// a) Que permita al usuario introducir 3 números por pantalla. Si los números suman 100 devolverá mediante un alert un mensaje de éxito. En caso contrario devolverá un mensaje de fracaso.
// function suma (n1, n2, n3) {
//     return +n1 + +n2 + +n3;
// }
//
// let num1 = prompt("Introduzca 1 número: ");
// let num2 = prompt("Introduzca el 2 número: ");
// let num3 = prompt("Introduzca el último número: ");
// let resultado = suma(num1, num2, num3);
// if (resultado >= 100) {
//     alert("Suman más de 100");
// } else {
//     alert("No suman más de 100");
// }

// b) Investiga la función setTimeOut. Fíjate cómo en dicha función se le pueden pasar dos parámetros, el número de milisegundos a esperar y qué función se va a ejecutar cuando pasen esos milisegundos. Crea un programa que espere 3 segundos y luego pinte en una alerta “Hola”.

// setTimeout(function (){
//     alert("Hola")
// }, 3000);

// c) Investiga la función setTimeOut. Fíjate cómo en dicha función se le pueden pasar dos parámetros, el número de milisegundos a esperar y qué función se va a ejecutar cuando pasen esos milisegundos. Crea un programa que pida por pantalla el nombre al usuario y después de 3 segundos genere una respuesta con el nombre que introdujo el alumno.

// let nombre = prompt("Introduzca su nombre: ")
// setTimeout(function (){
//     alert(nombre);
// }, 3000);

// d) Genera una función que dada una cadena pinte: El número de caracteres que hay. El número de vocales. Si empieza por “A” o no.

function contarCadena(cadena){
    alert("El total de caracteres es: " + cadena.length);
}
function contarVocales(cadena){
    let vocales = cadena.match(/[aeiou]/gi);
    alert("El total de vocales es: " +vocales.length);
}

function empiezaPorA(cadena) {
    if (cadena.startsWith("A") !== false){
        alert("Empieza por A");
    } else {
        alert("No empieza por A");
    }
}

let cadena1 = prompt("Escriba lo que quiera: ");

contarCadena(cadena1);
contarVocales(cadena1);
empiezaPorA(cadena1);