/*
    PRUEBA 1
 */


var obj = new Object();
obj.nombre = "Pedro"; // Creamos la propiedad nombre
obj["edad"] = 41; // Añadimos la propiedad edad con notación array
obj.getInfo = function() { // Añadimos un método al objeto para que muestre su info, un toString
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad;
};

// Probamos el objeto que acabamos de crear
console.log(obj.getInfo());
console.log(obj.nombre);
console.log(obj["nombre"]);

// La notación asociativa o de array tiene una ventaja
// Es que podemos guardar el nombre de la propiedad en una variable.
var prop = "nombre";
console.log(obj[prop]);

/*
    PRUEBA 1.2
 */
var obj2 = {
    nombre: "Paco",
    edad: 32,
    getInfo() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad;
    }
};
// Probamos el objeto que acabamos de crear
console.log(obj2.getInfo());
console.log(obj2.nombre);
console.log(obj2["nombre"]);

// La notación asociativa o de array tiene una ventaja
// Es que podemos guardar el nombre de la propiedad en una variable.
var prop2 = "nombre";
console.log(obj2[prop2]);