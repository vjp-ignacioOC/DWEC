/*
    Prueba las siguientes sentencias para este monumento:
 */
let monumento = {
    "uri": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/53-palacio-de-los-condes-de-adanero"
    },
    "geo_long": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#double",
        "value": "-6.37177"
    },
    "geo_lat": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#double",
        "value": "39.4737"
    },
    "clase": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "PALACIO "
    },
    "rdfs_label": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "Palacio de los Condes de Adanero"
    },
    "tieneEnlaceSIG": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1191 "
    }
};

console.log("El tipo de monumento es: " +monumento.clase.value);
console.log("El nombre del monumento es: " +monumento.rdfs_label.value);

monumento.pintarInfo=function() {
    return "- El nombre del monumento es: " +monumento.rdfs_label.value +
        "\n- El tipo de monumento es: " + monumento.clase.value +
        "\n- La latitud es " +monumento.geo_lat.value +
        "\n- La longitud " + monumento.geo_long.value +
        "\n- La url que viene dentro del campo uri es:" + monumento.uri.value
};

console.log(monumento.pintarInfo());