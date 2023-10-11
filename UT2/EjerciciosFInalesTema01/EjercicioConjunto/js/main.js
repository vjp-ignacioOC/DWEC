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

/*
    2.- Crea una función que reciba dos cadenas.
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

/*
    3.- Crea una función a la cual se le pase un array. Esta función devolverá:
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

/*
    4.- Crea una función que recibe 3 parámetros con valores por defecto (producto → “Producto genérico”, precio → 100, impuestos → 21).
    La función convierte las entradas a cadena, entero y entero.
    Si no se pudiesen convertir las entradas, devolvería los valores por defecto.
    Prueba esta función varias veces, omitiendo valores y poniendo valores incorrectos.
 */

function conversion(producto = "Producto genérico", precio = 100, impuestos = 21) {
    console.log("El producto es " + producto + ", el precio es " + +precio + " y su impuesto es " + +impuestos);
}

let prod = "asdf";
let prec = 12;
let imp = 2;

let prod2 = 12;
let prec2 = true;
let imp2 = "45";

conversion(prod,prec,imp);
conversion(prod2, prec2, imp2);
conversion(prod, );

/*
     5.- Crea una función que dado un array lo ordene (mira funciones predefinidas).
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

/*
    6.- Crea un array con 4 valores y realiza los siguientes pasos:
    1) Añade dos elementos al inicio.
    2) Añade 3 más al final.
    3) Elimina las posiciones 3,4,5
    4) Inserta 2 elementos antes del último elemento.
    NOTA: En cada cambio muestra los elementos del array separados por una almohadilla
    (no utilices bucles, utiliza las funciones predefinidas de arrays).
 */

arrayPrueba = [1,2,3,4];
console.log("El Array inicial es: " + arrayPrueba.join('#'));
// 1
arrayPrueba.unshift(5,6,7);
console.log("La primera prueba es: " + arrayPrueba.join('#'));
// 2
arrayPrueba.push(8,9,0);
console.log("La segunda prueba es: " + arrayPrueba.join('#'));
//3
arrayPrueba.splice(3,3);
console.log("La tercera prueba es: " + arrayPrueba.join('#'));
// 4
arrayPrueba.splice(-1,0,1, 2);
console.log("La cuarta prueba es: " + arrayPrueba.join('#'));

/*
    7.- Utiliza la función every para comprobar que todos los elementos de un array son pares.
 */

array1 = new Array(1,2,3,4,5,6);
array2 = new Array(2,4,6,8);

console.log(array1.every(num => num % 2 == 0)); // Devuelve false ya que todos no son pares
console.log(array2.every(num => num % 2 == 0)); // Devuelve true ya que todos son pares

/*
    8.- Crea una función procesarArray que realice los siguientes pasos:
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

/*
    9.- Crea un programa en el que existan 3 objetos de tipo platoCocina, que tengan los atributos: nombrePlato(cadena), duracionMinutos(un número) y dificultad(un número).
    Almacena en un mapa la relación de cada plato con un array que guarde los ingredientes que se utilizan como cadenas.
*/

let platoCocina1 = { nombrePlato: "Cocido", duracionMinutos: 60, dificultad: 6 };
let platoCocina2 = { nombrePlato: "Tortilla Española", duracionMinutos: 45, dificultad: 7 };
let platoCocina3 = { nombrePlato: "Berenjenas rellenas", duracionMinutos: 150, dificultad: 7 };

let mapaPlatos = new Map();
mapaPlatos.set(platoCocina1, ["Garbanzos", "Sal", "Patatas", "Chorizo", "Zanahorias"]);
mapaPlatos.set(platoCocina2, ["Huevos", "Sal", "Patatas", "Aceite", "Cebolla"]);
mapaPlatos.set(platoCocina3, ["Berenjenas", "Carne", "Aceite", "Sal", "Queso", "Pimientos", "Tomates", "Bechamel"]);

function recorrerMapa(mapaPlatos) {
    for (let [plato, ingredientes] of mapaPlatos) {
        console.log("El plato " + plato.nombrePlato + " tiene una duracion de " + plato.duracionMinutos + " con una dificultad de " + plato.dificultad);
        console.log("Ingredientes:");
        ingredientes.forEach(element => {
            console.log("-" + element);
        });
    }
}

console.log(recorrerMapa(mapaPlatos));