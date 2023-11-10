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
        return "El disco " + this.titulo + " del artista " + this.autor + " en el año " + +this.anio + " tuvo un total de ventas de " + +this.numVentas;
    }
};

console.log(discoMusica.getInfo());

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
        return "En la calle " + this.nombre + ", con una longitud de " + +this.longitud + " metros, tiene los siguientes establecimientos: " + calle.establecimientos[0].nombreEst + ", " +  calle.establecimientos[1].nombreEst + " y " + calle.establecimientos[2].nombreEst;
    }
};

console.log(calle.getInfo());

// Un coche:
// Que debe tener un modelo (string), un dueño (un objeto)
// y una marca (un objeto).
// Para el dueño debe almacenarse su nombre (string) y su edad (entero).
// Para la marca se debe guardar su nombre (un string)
// y el año de creación de la marca (entero).
// Debes crear también el método getInfo()
// para el coche que devuelva información sobre el coche,
// su dueño y su marca como una cadena.

let coche = {
  modelo: "modeloCoche",
  duenio: {
      nombre: "dueño1",
      edad: "25"
  },
  marca: {
      nombre: "marca1",
      creacion: "2020"
    },
  getInfo() {
    return "El coche " + this.modelo + " pertenece a " + this.duenio.nombre + " y se creó en el año " + +this.marca.creacion;
  }
};

console.log(coche.getInfo());

// Una obra de teatro:
// Debe almacenar información sobre el título de la obra (string),
// su fecha de estreno (string),
// su director (un objeto) y una lista (array)
// de todos sus actores (objetos) (al menos debe haber 3 actores).
//
// Del director se debe guardar información sobre su nombre (string),
// apellidos(string), nacimiento(entero),
// y una lista(array) con los títulos de algunas de sus obras (al menos 3).
//
// De los actores se debe guardar información de su nombre (string),
// de su edad(entero)
// y del número de veces que han representado la actuación (entero).
//
// Hay que crearse el método getInfo
// para la obra de teatro que devuelva por pantalla
// toda la información sobre una obra de teatro,
// incluido su director y sus actores.

let obraTeatro = {
  titulo: "tituloObra",
  fechaEstreno: "1-1-2024",
  director: {

  },
  lista: []
};