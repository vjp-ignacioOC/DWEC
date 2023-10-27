

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
    return document.getElementById('imgPreview').src !== '';
}

// Función para verificar si un día específico está seleccionado
function estaSeleccionado(dia) {
    const checkbox = document.getElementById(`check${dia}`);
    return checkbox.checked;
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

    if (!validarImagen()) {

    }
    let correspondenciaDias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    let fechaActual = new Date();
    let numeroDiaHoy = fechaActual.getDay();
    
    // Crear un nuevo restaurante con los valores ingresados
    const nuevoRestaurante = document.createElement('div');
    nuevoRestaurante.classList.add('card');
    nuevoRestaurante.innerHTML = `
    <img class="card-img-top" src="img/restaurant.jpg">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
      <div class="card-text">
        <small class="text-muted">
          <strong>Abre: </strong>${correspondenciaDias.filter(estaSeleccionado).join(', ')}
        </small>
        <span class="badge badge-${estaSeleccionado(correspondenciaDias[numeroDiaHoy]) ? 'success' : 'danger'}">${estaSeleccionado(correspondenciaDias[numeroDiaHoy]) ? 'Abierto' : 'Cerrado'}</span>
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
