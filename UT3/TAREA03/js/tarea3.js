// ! Variables globales importantes:
let restauranteCount = 0; // Inicializa la variable restauranteCount a 0. Esto lo que hace es que cada imagen tenga un ID distinto. // * Útil en la funcion crearRestaurante().
const expRegularNombre =  /^[A-Za-z][A-Za-z ]*$/; // Expresión regular para el nombre. // * Útil en la funcion validarFormulario() y aplicacion().
const expRegularDescripcion = /^(?!\s*$).+/; // Expresión regular para la Descripción. // * Útil en la funcion validarFormulario() y aplicacion().
const expRegularCocina = /^(?!\s*$).+/; // Expresión regular para la Cocina. // * Útil en la funcion validarFormulario() y aplicacion(). 
const expRegularTelefono = /^(34)?[6-9]\d{8}$/; // Expresión regular para el Teléfono. // * Útil en la funcion cvalidarFormulario() y aplicacion().


/*
    ?   Validaciones y aplicación.
*/ 

/*
    Función principal, desde esta función se llama a todas las demás funciones que sean necesarias para el desarrollo de la web.
*/
function aplicacion() {
    let miBotonCrear = document.querySelector("button"); // Creación de una variable donde se almacena el botón principal para la creación del restaurante.
    validarFormulario(); // 1ª Validación al formulario antes de darle click.
    miBotonCrear.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // 2ª Validación al formulario antes de darle click.
        const nombreValido = validarCampo(document.getElementById('nombre'), expRegularNombre);
        const descripcionValida = validarCampo(document.getElementById('descripcion'), expRegularDescripcion);
        const cocinaValida = validarCampo(document.getElementById('cocina'), expRegularCocina);
        const numeroValido = validarCampo(document.getElementById('telefono'), expRegularTelefono);
        const fotoValida = validarFoto(document.getElementById('foto'));
        const checkboxesValidar = document.querySelectorAll('input[name="dias"]');
        const diasAperturaValidos = validarDiasApertura(checkboxesValidar);

        // Creación de variable inicialida con el resultado de todos los inputs (true o false).
        const esFormularioValido = nombreValido && descripcionValida && cocinaValida && numeroValido && fotoValida && diasAperturaValidos;
        // Determina si el formulario es válido 
        if (esFormularioValido) { // Si hay uno de los inputs False, ya no entra en el if.
            crearRestaurante(); // Llamada a la creación del restaurante, con todos los inputs.
        }
    });

}

/*
    Función para validar el formulario. Se crean las constantes donde se almacenarán los inputs y después se
    llama a cada función individual para validar la información.
*/
function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const descripcion = document.getElementById('descripcion');
    const cocina = document.getElementById('cocina');
    const checkboxes = document.querySelectorAll('input[name="dias"]');
    const numero = document.getElementById('telefono');
    const foto = document.getElementById('foto');

    // * Todo esto son funciones anónimas. En este caso, se ejecutará cuando ocurra el evento Input. 
    nombre.addEventListener("input", function () {
        validarCampo(nombre, expRegularNombre);
    });
    descripcion.addEventListener("input", function () {
        validarCampo(descripcion, expRegularDescripcion);
    });
    cocina.addEventListener("input", function () {
        validarCampo(cocina, expRegularCocina);
    });
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            validarDiasApertura(checkboxes);
        });
    });
    numero.addEventListener("input", function () {
        validarCampo(numero, expRegularTelefono);
    });
    foto.addEventListener("input", function () {
        validarFoto(foto);
    });
}

/*
    Esta función valida el input; Nombre, Descripción, Cocina y Teléfono.
*/
function validarCampo(input, expRegular) {
    // Determina si lo que ha entrado por parámetros cumple con los dos requisitos, si está vació pasa al else, y si no cumple con la expresión regular también.
    if (!expRegular.test(input.value) || input.value === "") { // Con el test, validas la información de la expresión regular con el valor del input.
        input.classList.add("is-invalid"); // Se añade al class is-invalid. Esto hace que se ponga de color rojo y añada un comentario de error.
        input.classList.remove("is-valid"); // Elimina el is-valid de la clase.
        return false;
    } else {
        input.classList.remove("is-invalid"); // Elimina el is-invalid de la clase.
        input.classList.add("is-valid"); // Se añade al class is-valid. Esto hace que se ponga de color verde y borre el comentario de error.
        return true;
    }
}

/*
    Esta función valida el input; foto.
*/
function validarFoto(foto) {
    if (foto.files.length > 0) { // Si el tamaño del array de fotos es mayor que 0, entra.
        foto.classList.remove("is-invalid"); // Elimina el is-invalid de la clase.
        foto.classList.add("is-valid"); // Se añade al class is-valid. Esto hace que se ponga de color verde y borre el comentario de error.
        return true;
    } else {
        foto.classList.remove("is-valid"); // Elimina el is-valid de la clase.
        foto.classList.add("is-invalid"); // Se añade al class is-invalid. Esto hace que se ponga de color rojo y añada un comentario de error.
        return false;
    }
}

/*
    Esta función valida el input; diasApertura.
*/
function validarDiasApertura(checkboxes) {
    // Creación de una variable, la cual almacena el mensaje de error de cuando no hay ningún checkbox activo.
    const diasError = document.getElementById('diasError');
    // Validamos si alguno de los checkbox está marcado con el .some(...).
    /*
        * Esta línea lo que hace es lo siguiente:
            1. Array.from(checkboxes): Coge todos los checkboxes en un Array.
            2. .some: Es un método que verifica si cumple con la condición que le proporciones (Sólo funciona con Arrays, por eso es necesario pasar a array los checkboxes).
            3. La información del .some: Se está comprobando si al menos uno de los elementos del array checkboxes tiene la propiedad checked establecida como verdadera.
    */
    const alMenosUnDiaSeleccionado = Array.from(checkboxes).some(checkbox => checkbox.checked);

    // Verifica que no haya mínimo un checkbox activado.
    if (alMenosUnDiaSeleccionado) { // Si no hay ningún dia activo entra.
        diasError.classList.add("d-none"); // Añade la clase d-none, que muestra un mensaje de error.
        return true;
    } else {
        diasError.classList.remove("d-none"); // Elimina la clase d-none, que muestra un mensaje de error.
        return false;
    }
}



/*
    ?   Creación del Restaurante (Calcular Abierto/Cerrado, obtenerDiasSeleccionados, resetearFormulario).
*/

/*
    Función para mostrar todos los inputs que hemos recogido anteriormenete.
*/
function crearRestaurante() {
    // Creación de una variable para almacenar todos los elementos de tipo <input> que tienen el atributo name igual a "dias".
    const checkboxesRestaurante = document.querySelectorAll('input[name="dias"]');
    // Creación de una variable para almacenar el div donde se creará el restaurante.
    const placesContainer = document.getElementById('placesContainer');
    // Creación de una variable para crear un nuevo elemento div donde se creará cada uno de los restaurantes, cada uno de ellos tendrá un div individual como este.
    const nuevoRestauranteDiv = document.createElement('div');
    // Creación de una variable donde se almacenarán todos los días que ha seleccionado el usuario.
    const diasSeleccionados = obtenerDiasSeleccionados(checkboxesRestaurante);
    // Creación de una variable donde se almacenarán si el restaurante está abierto el día de hoy o cerrado.
    const abiertoCerrado = calcularSiEstaAbiertoCerrado(diasSeleccionados);

    // Introducimos la clase card a nuestro div donde se almacena el restaurante.
    nuevoRestauranteDiv.className = 'card';
    // Lo que nuestro div tendrá como contenido.  
    const contenidoRestaurante = `
    <img class="card-img-top" id="fotoRestaurante${restauranteCount}" src="">
    <div class="card-body">
        <h5 class="card-title">${nombre.value}</h5>
        <p class="card-text">${descripcion.value}</p>
        <div class="card-text">
            <small class="text-muted">
                <strong>Abre: </strong>${diasSeleccionados}
            </small>
            ${abiertoCerrado}
        </div>
        <div class="card-text">
            <small class="text-muted">
                <strong>Teléfono: </strong>${telefono.value}
            </small>
        </div>
    </div>
    <div class="card-footer">
        <small class="text-muted">
            ${cocina.value}
        </small>
    </div>
`;
    // Lo añadimos con el inner.HTML todo el contenido HTML que hemos introducido en la variable contenidoRestaurante.
    nuevoRestauranteDiv.innerHTML = contenidoRestaurante;

    restauranteCount++;  // * Incrementar el contador de restaurantes 

    // Añadimos el div del nuevoRestaurante creado al div principal donde almacenamos todos los restaurantes.
    placesContainer.appendChild(nuevoRestauranteDiv);

    // Obtener el primer archivo seleccionado en el elemento con el id "foto".
    const selectedImagen = document.getElementById("foto").files[0];
    // Verificar si se ha seleccionado una imagen.
    if (selectedImagen) { 
        // Crear una instancia de FileReader para leer el contenido del archivo.
        const reader = new FileReader();

        // Leer el contenido del archivo como una URL de datos 
        reader.readAsDataURL(selectedImagen);

        // Agregar un evento 'load' al lector para manejar la finalización de la lectura.
        reader.addEventListener('load', e => {
            // Actualizar la fuente de la imagen con el resultado de la lectura.
            document.getElementById(`fotoRestaurante${restauranteCount - 1}`).src = reader.result;
        });
    }

    resetearFormulario();
}

/*
    Función para calcular dependiendo de los días que el usuario ha seleccionado, si hoy está abierto o cerrado.
*/
function calcularSiEstaAbiertoCerrado(diasSeleccionados) {
    // Creo un array de los dias de la semana para almacenarlos.
    var diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    // Creo un objeto de la clase Date
    var fechaActual = new Date();

    // Creo una variable para almacenar el nombre del día que es hoy. Por ejemplo hoy es Martes, pues mostraría Mar.
    var nombreDia = diasSemana[fechaActual.getDay()];

    // Convierto los dias seleccionados en un array, en vez de una cadena de texto.
    var arrayDias = diasSeleccionados.split(',');

    for (let i = 0; i < arrayDias.length; i++) {
        const dia = arrayDias[i].trim(); // Uso trim para que no haya espacios.
        if (dia === nombreDia) {
            return `<span class="badge badge-success">Abierto</span>`;
        }
    }
    return `<span class="badge badge-danger">Cerrado</span>`;
}

/*
    Función obtener los días que el usuario ha seleccionado.
*/
function obtenerDiasSeleccionados(checkboxes) {
    // Convierte la colección de checkboxes en un array utilizando Array.from().
    const diasSeleccionados = Array.from(checkboxes)
        // Filtra solo los checkboxes que están marcados (checked).
        .filter(checkbox => checkbox.checked)
        // Mapea cada checkbox marcado al contenido de su siguiente hermano (el día).
        .map(checkbox => checkbox.nextElementSibling.textContent)
        // Une los días en una cadena separada por comas.
        .join(', ');

    return diasSeleccionados;
}

/*
    Función resetear el formulario cuando todo está correcto y le damos al botón de crear.
*/
function resetearFormulario() {
    const formulario = document.getElementById('newPlace');

    const campos = formulario.elements;
    // Quita todos los valids para que se reinicie correctamente el Formulario.
    for (let i = 0; i < campos.length; i++) {
        campos[i].classList.remove('is-valid', 'is-invalid');
    }

    // Reinicia el formulario para borrar los valores ingresados.
    formulario.reset();
}

// ! Llamada inicial a la aplicación.
aplicacion();