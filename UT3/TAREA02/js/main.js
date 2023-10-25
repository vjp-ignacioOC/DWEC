let boton = document.getElementById("guardarNota");
boton.addEventListener("click", function(){
    guardarNota();
    nota.value = "";
    nota.focus();
});
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

let contenedorNotas = document.getElementById("notas");
contenedorNotas.addEventListener("click", borrarNota);
let colorOriginal = ';'
function borrarNota(event) {
    if (event.target.tagName === 'P') {
        if(event.altKey) {
            if (event.target.style.backgroundColor === 'red') {
                event.target.style.backgroundColor = colorOriginal;
            } else {
                colorOriginal = event.target.style.backgroundColor;
                event.target.style.backgroundColor = 'red';
            }
        } else {
            event.target.remove();
        }
    }
}

