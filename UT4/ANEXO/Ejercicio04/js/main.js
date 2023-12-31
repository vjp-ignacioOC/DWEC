class Museo {
    constructor(nombre, latitud, longitud, url) {
        this.nombre = nombre;
        this.latitud = latitud;
        this.longitud = longitud;
        this.url = url;
    }

    getInfo() {
        console.log("Nombre: " + this.nombre + "\nLatitud: " + this.latitud + "\nLongitud: " + this.longitud + "\nURL: " + this.url);
    }

    getDivInfo() {
        let div = document.createElement("div");
        div.innerHTML = `<p><strong>Nombre:</strong> ${this.nombre}</p>
                     <p><strong>Latitud:</strong> ${this.latitud}</p>
                     <p><strong>Longitud:</strong> ${this.longitud}</p>
                     <p><strong>URL:</strong> ${this.url}</p>`;
        return div;
    }
}

let ergastJson = 'https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json';

document.getElementById("boton").addEventListener("click", function () {
    cargarDatos()
        .then(datos => convertirAMuseos(datos))
        .then(museos => mostrarMuseos(museos))
        .catch(error => console.error('Error al cargar los datos:', error));
});

function cargarDatos() {
    return new Promise((resolve, reject) => {
        fetch(ergastJson)
            .then(response => response.json())
            .then(datos => resolve(datos))
            .catch(error => reject(error));
    });
}

function convertirAMuseos(datos) {
    return new Promise((resolve, reject) => {
        try {
            let museos = datos.results.bindings.map(museo => {
                let nombre = museo.rdfs_label.value;
                let latitud = museo.geo_lat.value;
                let longitud = museo.geo_long.value;
                let url = museo.uri.value;
                return new Museo(nombre, latitud, longitud, url);
            });
            resolve(museos);
        } catch (error) {
            reject(error);
        }
    });

}

function mostrarMuseos(museos) {
    const contenedorMuseos = document.getElementById("contenedorMuseos");

    // Agregar filas a la tabla
    let tabla = document.querySelector("#tabla tbody");

    museos.forEach(museo => {
        museo.getInfo(); // Mostrar información por consola
        contenedorMuseos.appendChild(museo.getDivInfo()); // Mostrar información en un div

        // Agregar fila a la tabla
        let fila = `<tr>
                        <td>${museo.nombre}</td>
                        <td>${museo.latitud}</td>
                        <td>${museo.longitud}</td>
                        <td>${museo.url}</td>
                      </tr>`;
        tabla.innerHTML += fila;
    });
}
