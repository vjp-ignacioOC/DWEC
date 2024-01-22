'use strict';

//Crea el siguiente objeto usando JSON:

/*
Un plato que tiene un nombre (cadena), una duración (número),
una dificultad (cadena) y una serie de ingredientes (array de objetos).

Cada ingrediente tiene un nombre de ingrediente (cadena), una unidad de medida(cadena) y una cantidad (número).
Debe haber al menos 3 ingredientes en el plato.

Un ejemplo de ingrediente puede ser: Aceite (nombre) 1 (cantidad) cucharada (unidad de medida).
`' */


let plato = {
    'nombre': 'Cocido extremeño',
    'duracion': 45,
    'dificultad': 'Media/Baja',
    'ingredientes': [
        {
            "nombre": 'Garbanzos',
            "unidadMedida": 'Gramo/s',
            'cantidad': '400',
        },
        {
            "nombre": 'Chorizo',
            "unidadMedida": 'Pieza/s',
            'cantidad': '1',
        },
        {
            "nombre": 'Patata',
            "unidadMedida": 'Unidade/s',
            'cantidad': '1',
        },
        {
            "nombre": 'Aceite',
            "unidadMedida": 'Cucharada/s',
            'cantidad': '2',
        },
    ],
    getInfo() {
        console.log(`Nombre del plato: ${this.nombre}
            Duración(minutos): ${this.duracion}
            Dificultad: ${this.dificultad}
            Listado de Ingredientes: `
        );
        this.ingredientes.forEach(element => {
            console.log(`- ${element.nombre} : ${element.cantidad} ${element.unidadMedida}`);
        });
    }

};

plato.getInfo();