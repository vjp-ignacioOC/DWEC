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
    let tabla = ``;

    let museos = datos.results.bindings;
    for (let j = 0; j < museos.length; j++) {
        let nombre = museos[j].rdfs_label.value;
        let latitud = museos[j].geo_lat.value;
        let longitud = museos[j].geo_long.value;
        let url = museos[j].uri.value;
        tabla += `<tr><td>${nombre}</td><td>${latitud}</td><td>${longitud}</td><td>${url}</td></tr>`;
    }

    // Agregar los datos a la tabla en el cuerpo de la tabla
    document.querySelector("#tabla tbody").innerHTML = tabla;
    }



