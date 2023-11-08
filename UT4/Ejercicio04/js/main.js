//let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let ergastJson = 'http://ergast.com/api/f1/2004/1/results.json';

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
    peticionAjax.open("GET", /* corsAnywhere + */ ergastJson);
    peticionAjax.send();
}

function mostrarEnTabla(datos) {
    let tabla = '';
    let carreras = datos.MRData.RaceTable.Races;
    for (let i = 0; i < carreras.length; i++) {
        let resultados = carreras[i].Results;
        for (let j = 0; j < resultados.length; j++) {
            let resultado = resultados[j];
            let piloto = resultado.Driver.givenName + " " + resultado.Driver.familyName;
            let equipo = resultado.Constructor.name;
            let posicion = resultado.position;

            tabla += `<tr><td>${j+1}</td><td>${piloto}</td><td>${equipo}</td><td>${posicion}</td></tr>`;
        }
    }

    // Agregar los datos a la tabla en el cuerpo de la tabla
    document.querySelector("#tabla tbody").innerHTML = tabla;
}

