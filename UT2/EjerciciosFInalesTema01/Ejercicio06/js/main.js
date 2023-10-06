/*
    Crea un array con 4 valores y realiza los siguientes pasos:
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


