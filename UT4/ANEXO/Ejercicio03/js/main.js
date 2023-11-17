//let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let ergastJson = 'https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json';

document.getElementById("boton").addEventListener("click", function () {
    cargarDatos();
});

// document.getElementById("boton").addEventListener('dblclick', function() {
//     let tabla = document.querySelector("#tabla tbody");
//     tabla.reset();
// });
let peticionAjax = new XMLHttpRequest();
function cargarDatos() {
    peticionAjax.addEventListener("load", function () {
        if (peticionAjax.readyState === 4 && peticionAjax.status === 200) {
            let datos = JSON.parse(peticionAjax.responseText);
            mostrarEnTabla(datos);
        }
    });
    peticionAjax.open("GET", ergastJson);
    peticionAjax.send();
}

function mostrarEnTabla(datos) {
    let tabla = '';

        let museos = datos.results.bindings;
        tabla += '<tr><td>Nombre</td><td>Latitud</td><td>Longitud</td><td>Url</td></tr>'
        for (let i = 0; i < museos.length; i++) {
            for (let j = 0; j < museos.length; j++) {
                let museo = museos[i];
                let nombre = museos.rdfs_label;
                let latitud = museos.geo_lat;
                let longitud = museos.geo_long;
                let url = museos.uri;
                tabla += `<tr><td>${j+1}</td><td>${nombre}</td><td>${latitud}</td><td>${longitud}</td><td>${url}</td></tr>`;
            }
        }

        // Agregar los datos a la tabla en el cuerpo de la tabla
        document.querySelector("#contenedorTabla").innerHTML = tabla;
    }



