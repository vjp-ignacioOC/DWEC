/*
    Utiliza la función every para comprobar que todos los elementos de un array son pares.
 */

array1 = new Array(1,2,3,4,5,6);
array2 = new Array(2,4,6,8);

console.log(array1.every(num => num % 2 == 0)); // Devuelve false ya que todos no son pares
console.log(array2.every(num => num % 2 == 0)); // Devuelve true ya que todos son pares
