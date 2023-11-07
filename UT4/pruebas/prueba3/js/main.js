// function pintaInfoMonumento(objetoMonumento) {
//     let cadenaDeVuelta = "" ;
//     cadenaDeVuelta += "Nombre " + objetoMonumento.rdfs_label.value + "\n";
//     cadenaDeVuelta += "Tipo monumento " + objetoMonumento.om_tipoMonumento.value + "\n";
//     cadenaDeVuelta += "Latitud " + objetoMonumento.geo_lat.value + "\n";
//     cadenaDeVuelta += "Longitud " + objetoMonumento.geo_long.value + "\n";
//     cadenaDeVuelta += "Uri " + objetoMonumento.uri.value;
//     return cadenaDeVuelta;
// }

// let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
// let monumentosJson = "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json";
let monumentosJson = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", monumentosJson);
peticionAjax.send();

function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) { // Consultamos que la respuesta es correcta
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

function procesarResultado(objetoResultado) {
    // for (let monumento of objetoResultado.result) {
    //     console.log(pintaInfoMonumento(monumento));
    // }
    console.log(objetoResultado);
}