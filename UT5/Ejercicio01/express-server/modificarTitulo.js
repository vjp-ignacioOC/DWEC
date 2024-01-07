document.addEventListener('DOMContentLoaded', () => {
    let jsonPrueba;

    function hacerPeticion(url, callback) {
        let peticionAjax = new XMLHttpRequest();
        peticionAjax.open("GET", url);
        peticionAjax.onreadystatechange = function () {
            if (peticionAjax.readyState === 4 && peticionAjax.status === 200) {
                callback(JSON.parse(peticionAjax.responseText));
            }
        };
        peticionAjax.send();
    }

    function manejarJson(json) {
        jsonPrueba = json;
        jsonPrueba.forEach(crearPost);
    }

    function crearPost(post) {
        let divContenedor = document.getElementById("contenedorEntradas");
        let div = document.createElement("div");
        div.id = `tarea-${post.titulo}`;

        let botonModificar = document.createElement("button");
        botonModificar.textContent = `Modificar Tarea: ${post.titulo}`;
        botonModificar.onclick = () => mostrarFormularioEditar(post.titulo, botonModificar);

        let formularioEditar = document.createElement("div");
        formularioEditar.id = `formularioEditar-${post.titulo}`;
        formularioEditar.style.display = 'none';
        formularioEditar.innerHTML = `
            <input type="text" id="editarTitulo-${post.titulo}" placeholder="Título" value="${post.titulo}">
            <textarea id="editarDescripcion-${post.titulo}" placeholder="Descripción">${post.descripcion}</textarea>
            <select id="editarEstado-${post.titulo}">
                <option value="pendiente" ${post.estado === 'pendiente' ? 'selected' : ''}>Pendiente</option>
                <option value="haciendo" ${post.estado === 'haciendo' ? 'selected' : ''}>Haciendo</option>
                <option value="completado" ${post.estado === 'completado' ? 'selected' : ''}>Completado</option>
            </select>
            <input type="date" id="editarFecha-${post.titulo}" value="${post.fecha}">
            <input type="time" id="editarHora-${post.titulo}" value="${post.hora}">
            <button onclick="actualizarTarea('${post.titulo}')">Guardar Cambios</button>
        `;

        div.appendChild(botonModificar);
        div.appendChild(formularioEditar);
        divContenedor.appendChild(div);
    }

    window.mostrarFormularioEditar = function(tituloTarea, boton) {
        let formulario = document.getElementById(`formularioEditar-${tituloTarea}`);
        formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
        boton.textContent = formulario.style.display === 'none' ? `Modificar Tarea: ${tituloTarea}` : 'Cancelar Modificación';
    };

    window.actualizarTarea = function(tituloTarea) {
        let titulo = document.getElementById(`editarTitulo-${tituloTarea}`).value;
        let descripcion = document.getElementById(`editarDescripcion-${tituloTarea}`).value;
        let estado = document.getElementById(`editarEstado-${tituloTarea}`).value;
        let fecha = document.getElementById(`editarFecha-${tituloTarea}`).value;
        let hora = document.getElementById(`editarHora-${tituloTarea}`).value;

        fetch(`http://localhost:3000/tasks/${tituloTarea}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                titulo: titulo,
                descripcion: descripcion,
                estado: estado,
                fecha: fecha,
                hora: hora
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud ha fallado: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Tarea actualizada:', data);
            })
            .catch(error => {
                console.error('Ha ocurrido un error:', error);
            });
    };

    hacerPeticion("http://localhost:3000/tasks", manejarJson);
});