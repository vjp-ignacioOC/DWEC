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