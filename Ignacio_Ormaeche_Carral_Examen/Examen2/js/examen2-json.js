'use strict';

//Crea el siguiente objeto usando JSON:

/*
Un plato que tiene un nombre (cadena), una duración (número),
una dificultad (cadena) y una serie de ingredientes (array de objetos).

Cada ingrediente tiene un nombre de ingrediente (cadena), una unidad de medida(cadena) y una cantidad (número).
Debe haber al menos 3 ingredientes en el plato.

Un ejemplo de ingrediente puede ser: Aceite (nombre) 1 (cantidad) cucharada (unidad de medida).

 */

// Creamos el plato
let plato = {
    //Le damos un nombre
    "Nombre": "Tortilla de patata",
    // Una duración de preparación
    "Duracion": 45,
    // La dificultad de la preparación
    "Dificultad": "Media/Baja",
    // Y un array con los ingredientes
    "Ingredientes": [
        {
            "Nombre": "Huevos",
            "Medida": "Pieza/s",
            "Cantidad": 3
        },
        {
            "Nombre": "Patatas",
            "Medida": "Unidade/s",
            "Cantidad": 6
        },
        {
            "Nombre": "Sal",
            "Medida": "Cucharada/s",
            "Cantidad": 2
        },
        {
            "Nombre": "Aceite",
            "Medida": "Cucharada/s",
            "Cantidad": 2
        }
        // Se hace sin cebolla siempre
    ],

    //Mostramos la información del plato
    getInfo() {
        //Mostramos el nombre
        console.log(`Nombre: ${this.Nombre}`);
        //Mostramos la duración y la dificultad
        console.log(`       Duración (minutos): ${this.Duracion}`);
        console.log(`       Dificultad: ${this.Dificultad}`);
        //Mostramos el listado de los ingredientes
        console.log(`       Listado de ingredientes: `);
        //Con el forEach lo que hacemos es mostrar cada uno de los ingredientes(elemento) que tiene la lista de ingredientes
        this.Ingredientes.forEach(elemento => {
            console.log(`- ${elemento.Nombre} : ${elemento.Cantidad} ${elemento.Medida}`)
        })
    }
};

plato.getInfo();