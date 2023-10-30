

// Funciones de validación
function validarNombre(nombre) {
    const regex = /^[A-Za-z][A-Za-z\s]*$/;
    return regex.test(nombre);
}

function validarDescripcion(descripcion) {
    return descripcion.trim() !== '';
}

function validarCocina(cocina) {
    return cocina.trim() !== '';
}

function validarTelefono(telefono) {
    const regex2 = /^[0-9]{9}$/;
    return regex2.test(telefono);
}

function validarImagen() {
    return document.getElementById('imgPreview').src.includes("data:image");
}

// Función para verificar si un día específico está seleccionado
function estaSeleccionado(dia) {
    let checkbox = "";
    switch (dia) {
        case "Lun":
            checkbox = document.getElementById("checkLunes");
            break;
        case "Mar":
            checkbox = document.getElementById("checkMartes");
            break;
        case "Mie":
            checkbox = document.getElementById("checkMiercoles");
            break;
        case "Jue":
            checkbox = document.getElementById("checkjueves");
            break;
        case "Vie":
            checkbox = document.getElementById("checkViernes");
            break;
        case "Sab":
            checkbox = document.getElementById("checkSabado");
            break;
        case "Dom":
            checkbox = document.getElementById("checkDomingo");
            break;
    }

    return checkbox.checked;
}

function openedDays() {
    let result = []

    if (document.getElementById("checkLunes").checked) {
        result.push("Lun")
    }
    if (document.getElementById("checkMartes").checked) {
        result.push("Mar")
    }
    if (document.getElementById("checkMiercoles").checked) {
        result.push("Mie")
    }
    if (document.getElementById("checkJueves").checked) {
        result.push("Jue")
    }
    if (document.getElementById("checkViernes").checked) {
        result.push("Vie")
    }
    if (document.getElementById("checkSabado").checked) {
        result.push("Sab")
    }
    if (document.getElementById("checkDomingo").checked) {
        result.push("Dom")
    }

    return result.join(', ')
}

function closedDays() {
    let result = []

    if (!document.getElementById("checkLunes").checked) {
        result.push("Lun")
    }
    if (!document.getElementById("checkMartes").checked) {
        result.push("Mar")
    }
    if (!document.getElementById("checkMiercoles").checked) {
        result.push("Mie")
    }
    if (!document.getElementById("checkJueves").checked) {
        result.push("Jue")
    }
    if (!document.getElementById("checkViernes").checked) {
        result.push("Vie")
    }
    if (!document.getElementById("checkSabado").checked) {
        result.push("Sab")
    }
    if (!document.getElementById("checkDomingo").checked) {
        result.push("Dom")
    }

    return result.join(', ')
}

// Evento para validar la imagen al cargarla
let foto = document.getElementById('foto');
foto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }
    reader.addEventListener('load', (e) => {
        document.getElementById('imgPreview').src = reader.result;
    });
});

// Evento para manejar el envío del formulario
let newPlace = document.querySelectorAll('button');
newPlace[0].addEventListener('click', (event) => {
    event.preventDefault();

    // Obtener valores del formulario
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let cocina = document.getElementById('cocina').value;
    let telefono = document.getElementById('telefono').value;
    let img = "../img/rest1.jpg"

    // Validar cada campo y mostrar mensajes de error si es necesario
    if (!validarNombre(nombre)) {
        document.getElementById('nombre').classList.add('is-invalid');
    } else {
        document.getElementById('nombre').classList.add('is-valid');
    }

    if (!validarDescripcion(descripcion)) {
        document.getElementById('descripcion').classList.add('is-invalid');
    } else {
        document.getElementById('descripcion').classList.add('is-valid');
    }

    if (!validarCocina(cocina)) {
        document.getElementById('cocina').classList.add('is-invalid');
    } else {
        document.getElementById('cocina').classList.add('is-valid');
    }

    if (!validarTelefono(telefono)) {
        document.getElementById('telefono').classList.add('is-invalid');
    } else {
        document.getElementById('telefono').classList.add('is-valid');
    }

    if (validarImagen()) {
        img = document.getElementById('imgPreview').src;
    }

    const correspondenciaDias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let fechaActual = new Date();
    let diaActual = correspondenciaDias[fechaActual.getDay()];
    let estaAbierto = estaSeleccionado(diaActual);
    let badgeClass = estaAbierto ? 'success' : 'danger';
    let estado = estaAbierto ? 'Abierto' : 'Cerrado';


    // Crear un nuevo restaurante con los valores ingresados
    const nuevoRestaurante = document.createElement('div');
    nuevoRestaurante.classList.add('card');
    nuevoRestaurante.innerHTML = `
    <img class="card-img-top" src="${img}">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <div class="card-text">
        <span class="badge badge-success">Abierto</span>
        <small class="text-muted">
            ${openedDays()}
        </small>
        <br>
        <span class="badge badge-danger">Cerrado</span> 
        <small class="text-muted">
            ${closedDays()}
        </small>      
      </div>
      <div class="card-text">
        <small class="text-muted">
          <strong>Teléfono: </strong>${telefono}
        </small>
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        ${cocina}
      </small>
    </div>
  `;

    // Agregar el nuevo restaurante al contenedor de restaurantes
    let newRestaurante = document.getElementById('placesContainer');
    newRestaurante.appendChild(nuevoRestaurante);
});
