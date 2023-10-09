/*
    PRUEBA 6.2
 */

let body = document.body;
let elemento = document.createElement("p");
let texto = document.createTextNode("Este es el párrafo final");
elemento.appendChild(texto);
body.appendChild(elemento);

/*
    PRUEBA 7
 */

let elementos = document.getElementsByTagName("p");

for (let clave of elementos) {
    console.log(clave);
}
let elementoEliminar = elementos[0];
elementoEliminar.remove();

for (let clave of elementos) {
    console.log(clave);
}