// function pintarHola() {
//     console.log("Hola")
// }
// setTimeout(pintarHola, 500); //llama a la función en 0´5 segundos

// Guardando la función en una variable.
let funcion1 = function() {
    setTimeout(console.log("Hola"), 500);
}

// Guardando la función en una variable, describiendo la función con lambda.
let funcion2 = () => {
    setTimeout(console.log("Hola"), 500);
}

// Sin guardar la función, escribiéndola directamente donde la necesites con function.
setTimeout(function() {
    console.log("Hola")
}, 500);

// Sin guardar la función, escribiéndola directamente donde la necesites con lambda.
setTimeout(()=> {
    console.log("Hola")
}, 500);