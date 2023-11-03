function pintaInfoMonumento(objetoMonumento) {
    let cadenaDeVuelta = "" ;
    cadenaDeVuelta += "Nombre " + objetoMonumento.rdfs_label.value + "\n";
    cadenaDeVuelta += "Tipo monumento " + objetoMonumento.om_tipoMonumento.value + "\n";
    cadenaDeVuelta += "Latitud " + objetoMonumento.geo_lat.value + "\n";
    cadenaDeVuelta += "Longitud " + objetoMonumento.geo_long.value + "\n";
    cadenaDeVuelta += "Uri " + objetoMonumento.uri.value;
    return cadenaDeVuelta;
}

let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET",  "http://opendata.caceres.es/GetData/GetData?dataset=om:Monumento&format=json");
peticionAjax.send();

function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) { // Consultamos que la respuesta es correcta
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

function procesarResultado(objetoResultado) {
    for (let monumento of objetoResultado.result.bindings) {
        console.log(pintaInfoMonumento(monumento));
    }
}