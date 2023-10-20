
const validDni = /^[0-9]{7,8}[A-Z]$/;
const validFecha = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
const validId = /^[_a-z][_a-zA-Z0-9]*$/;

let botonDni = document.getElementById("dni");
botonDni.addEventListener("click", validarDNI);

let botonFecha = document.getElementById("fecha");
botonFecha.addEventListener("click", validarFecha);

let botonId = document.getElementById("id");
botonId.addEventListener("click", validarId);



function validarDNI() {
    const dni = document.getElementById("entrada").value;
    if (dni) {
        if (!validDni.test(dni)){
            alert("La entrada NO es un DNI válido.");
        }
    }
}

function validarFecha() {
    const fecha = document.getElementById("entrada").value;
    if (fecha) {
        if (!validFecha.test(fecha)) {
            alert("La entrada NO es una fecha válida.");
        }
    }
}

function validarId() {
    const id = document.getElementById("entrada").value;

    if(id) {
        if (!validId.test(id)) {
            alert("El identificador NO es válido.")
        } else {
            alert("Es un identificador válido.")
        }
    }
}