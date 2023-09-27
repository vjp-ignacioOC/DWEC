//alert("Esto es una alerta");

//while (!nombre) {
//var nombre=prompt("Introduce tu nombre")
//}
//console.log("Ha entrado en el sistema" +nombre);


// /*
//     PRUEBA 1
//  */
// <script>
//  let nombre="Jesús";
//console.log(nombre);
//console.log(typeof nombre);

//var altura = 180;
//console.log(altura);
//console.log(typeof altura);

//altura = "Uno con Ochenta"
//console.log(altura);
//console.log(typeof altura);
//</script>


// /*
//     PRUEBA 2
//  */
//let prueba;
//console.log(prueba);
//console.log(typeof prueba);
//console.log(altura);


// /*
//     PRUEBA 3
//  */
// function saludoBienvenida(nombre) {
//     console.log("Bienvenido " +nombre);
// }
//
// saludoBienvenida();
// saludoBienvenida("Paco");
// saludoBienvenida("Paco", "Rosa", "Manuel");
// saludoBienvenida(["Paco", "Rosa", "Manuel"]); //Array


// /*
//     PRUEBA 4
//  */
// let funcionCalcularPrecio = function(n1, n2) {
//     return n1*n2;
// }
//
// console.log(funcionCalcularPrecio(3, 6));


// /*
//     PRUEBA 5
//  */
// let funcionSumarUnoMas = function(valor) {
//     return valor+=1;
// }
//
// console.log(funcionSumarUnoMas(5));


// /*
//    PRUEBA 6 - 6.2
// */
// let funcionLambda = (arg1, arg2) => {return arg1 + arg2};
// console.log(funcionLambda(3,2));

// let funcionProcesadoraPar = function (arg1, arg2, funcionProcesadora){
//     return funcionProcesadora(arg1, arg2);
// }

// console.log("Esta vez procesamos una funcion (de 3 y 2): " + funcionProcesadoraPar(3, 2, (n1,n2) => {return n1+n2}));
//
// console.log("Esta vez procesamos una funcion (de 3 y 2): " + funcionProcesadoraPar(3, 2, (n1,n2) => n1*n2));

// let procesaTres = function (arg1, arg2, arg3, funcionProcesadora) {
//     return funcionProcesadora(arg1, arg2, arg3);
// }
//
// // A.- Devuelve la suma de los 3
// console.log(procesaTres(2, 5, 4, (n1,n2,n3) => n1+n2+n3));
//
// // B.- Devuelva el mayor.
// console.log(procesaTres(2, 5, 4, (n1,n2,n3) => Math.max(n1,n2,n3)));
//
// // C.- Devuelva el menor.
// console.log(procesaTres(2, 5, 4, (n1,n2,n3) => Math.min(n1,n2,n3)));
//
// // D.- Devuelva la suma del primero y el tercero y el resultado dividido entre el segundo.
// console.log(procesaTres(2, 5, 4, (n1,n2,n3) => (n1+n3)/n2));
//
//
// /*
//     PRUEBA 7
//  */
// function cambiarContenido(a, b, c) {
//     a = a*10;
//     b.item = "cambiar";
//     c = {item: "cambiar"};
// }
//
// var num= 10;
// var obj1 = {item: "inicial"};
// var obj2 = {item: "inicial"};
//
// cambiarContenido(num, obj1, obj2);
//
// console.log(num);
// console.log(obj1.item);
// console.log(obj2.item);
//
//
// /*
//     PRUEBA 8 - 8.5
//  */
//
// // function calculaPrecioConImpuesto(valor, impuesto = 10) {
// //     return valor + impuesto;
// // }
//
// console.log("Producto de 100€, sin entrada de impuesto: " + calculaPrecioConImpuesto(100));
// console.log("Producto de 100€, con 30€ de impuesto: " + calculaPrecioConImpuesto(100, 30));
//
// function calculaPrecioConImpuesto(valor, impuesto = (valor/10)) {
//     return valor + impuesto;
// }
//
// /*
//     PRUEBA 9
//  */
// // if
// let precio = 65;
// if(precio < 50){
//     console.log("Esto es barato");
// } else if (precio < 100){
//     console.log("Esto no es tan barato...");
// } else {
//     console.log("Esto es caro");
// }
// // switch (Es mejor que el if)
// let tipoUsuario = 1;
// switch (tipoUsuario) {
//     case 1: //No tiene nada porque el case1 tiene las mismas opciones que el case2
//     case 2:
//         console.log("Puedes acceder.");
//         break;
//     case 3:
//         console.log("No tienes permisos de acceso.");
//         break;
//     default:
//         console.error("Tipo de usuario incorrecto");
// }
//
// /*
//     PRUEBA 10
//  */
// // WHILE
// console.log("PreIntento");
// let i = 1;
// while (i < 5) {
//     console.log(i++);
// }
//
// console.log("\nPostIncremento");
// let j = 1;
// while (j < 5){
//     console.log(++j);
// }
// // DO .. WHILE
// console.log("\nCon Do..While");
// let value = 1;
// do {
//     console.log(value++);
// } while (value <= 5);
// //FOR
// console.log("\nCon For");
// for (let indice = 0; indice < 5; indice++){
//     console.log(indice);
// }
// // Varias inicializaciones en el for:
// console.log("\nFor con múltiples sentencias");
// for (let ind1 = 0, ind2 = 5; ind1 < 5 && ind2 > 0; ind1++ && ind2--) {
//     console.log(ind1 + " -- " + ind2);
// }
//
//
// /*
//     PRUEBA 11
//  */
// console.log(typeof 3);
// console.log(typeof 3.56);
//
// let num2 = 3.2e-3;
// console.log(num2);
//
// console.log(3.32924325.toFixed(2));
// console.log(5435.45.toExponential());
// console.log((3).toFixed(2));
//
//
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE * 2);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(typeof Number.POSITIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY / 2);


/*
    PRUEBA 12
 */
let c = 3;
let d = "12";
console.log(c * d); //36
console.log(c + d); //312
console.log(c + +d); //15