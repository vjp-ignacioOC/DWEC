/*
    14.1.- Crea un programa que dada la siguiente cadena y utilizando un bucle for...of devuelva cuáles de las letras son vocales y cuáles son consonantes. NOTA: Los caracteres de las cadenas se pueden recorrer con un bucle de este tipo.
 */

// function separarCadena (cadena) {
//     for (let item of cadena) {
//         if (item.match(/[aeiou]/gi)){
//             console.log(item + " es una vocal");
//         } else if(item.match(/[bcdfghjklmnpqrstvwxyz]/gi)){
//             console.log(item + " es una consonante");
//         } else {
//             console.log(item + " es un número");
//         }
//     }
// }
//
// let str = "ab1c3de4fg";
// separarCadena(str);


/*
    14.2.- Utiliza splice (en una sola sentencia) para que el siguiente array: [1, 2, "a", "d", "g"] se modifique a: [1, 2, "pepe", 3, "H", "g"]
 */

let array = [1, 2, "a", "d", "g"];
array.splice(2, 2, "pepe", 3, "H" );

console.log(array);
