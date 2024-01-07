let boton = document.querySelector('input[type="submit"]');

let tituloFormulario = document.getElementById("titulo");
let descripcionFormulario = document.getElementById("descripcion");
let estadoFormulario = document.getElementById("estado");
let fechaFormulario = document.getElementById("fecha");
let horaFormulario = document.getElementById("hora");


boton.addEventListener('click', function (event) {
    event.preventDefault();
    fetch('http://localhost:3000/tasks', {  // Reemplaza con tu URL de destino
        method: 'POST',  // Método HTTP para la solicitud
        headers: {
            'Content-Type': 'application/json',  // Indica que el cuerpo de la solicitud es JSON
        },
        body: JSON.stringify({  // Convierte el objeto JavaScript en una cadena JSON
            titulo: tituloFormulario.value,
            descripcion: descripcionFormulario.value,
            estado: estadoFormulario.value,
            fecha: fechaFormulario.value,
            hora: horaFormulario.value
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud ha fallado: ' + response.statusText);
            }
            return response.json();  // Procesa la respuesta para obtener el JSON
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);  // Maneja la respuesta del servidor
        })
        .catch(error => {
            console.error('Ha ocurrido un error:', error);  // Maneja errores de la solicitud
        });
});