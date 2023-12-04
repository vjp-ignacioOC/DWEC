/**
 * + Creación la variable que contendrá el Json
 */
let ordenador = {
    "marca": 'MSI España',
    "placa": {
        "codigo": '241871Cod',
        "socket": 'SocketBuenoPlaca',
        "frecuenciasSoportadas": [
            '2200', '2600', '2800', '3300'
        ],
    },
    "procesador": {
        "socket": 'SocketBuenoProcesador',
        "frecuencia": 4300,
    },
    "serieDispositivos": [
        {
            "nombre": 'Ratón',
            "precio": 21,
            "conector": 'bluetooth',
        },
        {
            "nombre": 'Teclado',
            "precio": 120,
            "conector": 'cable',
        },
        {
            "nombre": 'Cascos',
            "precio": 34,
            "conector": 'bluetooth',
        }
    ],
    /**
     * + Método para mostrar la información del Json, cada información es un log diferente.
     */
    mostrarInfo() {
        // Mostrar Marca:
        console.log(`Marca: ${this.marca}`);
        // Mostrar Placa Base:
        console.log(`Placa Base: 
        Código: ${this.placa.codigo}
        Socket: ${this.placa.socket}
        Frecuencias Soportadas: ${this.placa.frecuenciasSoportadas}
        `);
        // Mostrar Procesador:
        console.log(`Procesador: 
        Socket: ${this.procesador.socket}
        Frecuencia: ${this.procesador.frecuencia}
        `);
        // Mostrar Dispositivos:
        console.log(`Dispositivos: `);
        this.serieDispositivos.forEach(element => {
            console.log(`       Nombre: ${element.nombre}`);
            console.log(`       Precio: ${element.precio}€`);
            console.log(`       Conector: ${element.conector}`);
            console.log('');
        });
    }
}

/**
 * + Llamada al método que muestra toda la información.
*/
ordenador.mostrarInfo();