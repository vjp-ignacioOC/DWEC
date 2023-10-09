

let primerElemento = document.getElementById("primerElemento");

// let elementos = document.getElementsByTagName("li");
// for (let clave of elementos) {
//     console.log(clave.nodeName);
//     console.log(clave.nodeType);
//     console.log(clave.nodeValue);
//     console.log(clave.textContent);
// }

let elemento2 = document.getElementById("primerElemento");
while (elemento2) {
    console.log(elemento2.nodeName);
    console.log(elemento2.nodeType);
    console.log(elemento2.nodeValue);
    console.log(elemento2.textContent);
    elemento2 = elemento2.nextElementSibling;
}