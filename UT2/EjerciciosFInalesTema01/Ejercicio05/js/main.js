/*
     Crea una función que dado un array lo ordene (mira funciones predefinidas).
     Intenta hacer un método para ordenarlo por tí mismo considerando que el array siempre incluyese números (Es decir, sin utilizar .sort()).
 */

function ordenarArray (array) {
    console.log(array.sort());
}

let array = new Array("asd", "udsgdh", "sjusvh", "iusd");

ordenarArray(array);

let arrayNumeros = new Array(4,2,6,1,7,3,8);

arrayNumeros.sort(function (a,b) { return a - b;});
console.log(arrayNumeros);