let boton = document.getElementById("guardarNota");
boton.addEventListener("click", guardarNota);
function guardarNota() {
    let nota = document.getElementById("nota").value;
    if(nota) {
        let div = document.getElementById("notas");
        let elemento = document.createElement("p");

        elemento.textContent = nota;
        div.appendChild(elemento);
    } else {
        alert("No has introducido texto");
    }
}