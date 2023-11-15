let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let ergastJson = 'http://opendata.caceres.es/GetData/GetData?dataset=om:Museo&format=json';

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
    peticionAjax.open("GET", corsAnywhere + ergastJson);
    peticionAjax.send();
}

function mostrarEnTabla(datos) {
    let tabla = '';
    let museos = datos.rdfs_label;
    let nombre = '';
    let latitud = '';
    let longitud = '';
    let url = '';
    tabla += '<tr><th>Nombre</th><th>Latitud</th><th>Longitud</th><th>Url</th></tr>'
    for (let i = 0; i < museos.length; i++) {
        let resultados = museos[i].results;
        for (let j = 0; j < resultados.length; j++) {
            nombre = resultados[j];
            latitud = resultado.geo_lat ;
            longitud = resultado.geo_long ;
            url = resultado.uri;

            tabla += `<tr><td>${j+1}</td><td>${nombre}</td><td>${latitud}</td><td>${longitud}</td><td>${url}</td></tr>`;
        }
    }

    // Agregar los datos a la tabla en el cuerpo de la tabla
    document.querySelector("#contenedorTabla").innerHTML = tabla;
}

