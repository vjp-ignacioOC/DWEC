// Un disco de música.
// Dicho disco tiene que tener un título (string), un autor (string),
// el año que fue publicado (un número) y el número de ventas
// que tuvo (un entero).
// Además debes crear para dicho objeto un método getInfo()
// que devuelva una cadena con la información del título, autor, año y ventas.

let discoMusica = {
    titulo: "tituloDisco",
    autor: "autorDisco",
    anio: "2023",
    numVentas: "100",
    getInfo() {
        return "El disco " + this.titulo + " del artista " + this.autor + " en el año " + this.anio + " tuvo un total de ventas de " +this.numVentas
    }
};

// Una calle de una ciudad:
// Dicha calle debe tener un nombre (string), la longitud (entero)
// y además una lista (array) con los nombres (string)
// de varios de sus establecimientos (al menos 3).
// Además debes crear el método getInfo() que devuelva
// todo la información de la calle, incluidos sus establecimientos.

let calle = {
    nombre: "nombreCalle",
    longitud: "100",
    establecimientos: [
        {
            nombreEst: "establecimiento1"
        },
        {
            nombreEst: "establecimiento2"
        },
        {
            nombreEst: "establecimiento3"
        }
    ],
    getInfo() {
        return "En la calle " + this.nombre + ", con una longitud de " + this.longitud + " metros, tiene los siguientes establecimientos: " + calle.establecimientos[0].nombreEst + ", " +  calle.establecimientos[1].nombreEst + " y " + calle.establecimientos[2].nombreEst;
    }
};

console.log(calle.getInfo());

