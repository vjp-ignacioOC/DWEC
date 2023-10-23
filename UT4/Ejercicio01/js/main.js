/*
    Modifica la función getInfo del objeto persona anterior para que además de pintar su nombre y su edad también pinte una lista con los trabajos en los que estuvo y las fechas de cada uno de ellos:
    Puedes reutilizar el código anterior y cambiar la función getInfo:
 */


var persona = {
    nombre: "Marta",
    edad: 23,
    trabajos: [
        {
            descripcion: "Payaso de circo",
            duracion: "2003-2005"
        },
        {
            descripcion: "Sexador de pollos",
            duracion: "2005-2019"
        }
    ],
    getInfo() {
        let cadenaDeVuelta =  "Mi nombre es " + this.nombre + " y tengo " + this.edad;
        cadenaDeVuelta += "\n" + "-" + this.trabajos[0].descripcion + " --> " + this.trabajos[0].duracion;
        cadenaDeVuelta += "\n" + "-" + this.trabajos[1].descripcion + " --> " + this.trabajos[1].duracion;
        return cadenaDeVuelta;
    }
};
// Probamos el objeto que acabamos de crear
console.log(persona.getInfo());

