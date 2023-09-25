
// let funcionLambda = (arg1, arg2) => {return arg1 + arg2};
// console.log(funcionLambda(3,2));

// let funcionProcesadoraPar = function (arg1, arg2, funcionProcesadora){
//     return funcionProcesadora(arg1, arg2);
// }

// console.log("Esta vez procesamos una funcion (de 3 y 2): " + funcionProcesadoraPar(3, 2, (n1,n2) => {return n1+n2}));
//
// console.log("Esta vez procesamos una funcion (de 3 y 2): " + funcionProcesadoraPar(3, 2, (n1,n2) => n1*n2));

let procesaTres = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

// A.- Devuelve la suma de los 3
console.log(procesaTres(2, 5, 4, (n1,n2,n3) => n1+n2+n3));

// B.- Devuelva el mayor.
console.log(procesaTres(2, 5, 4, (n1,n2,n3) => Math.max(n1,n2,n3)));

// C.- Devuelva el menor.
console.log(procesaTres(2, 5, 4, (n1,n2,n3) => Math.min(n1,n2,n3)));

// D.- Devuelva la suma del primero y el tercero y el resultado dividido entre el segundo.
console.log(procesaTres(2, 5, 4, (n1,n2,n3) => (n1+n2)/n3));