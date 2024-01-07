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
        jsonPrueba.forEach(crearElementoTarea);
    }

    function crearElementoTarea(tarea) {
        let divContenedor = document.getElementById("contenedorEntradas");
        let div = document.createElement("div");
        div.id = `tarea-${tarea.titulo}`;

        let parrafo = document.createElement("p");
        parrafo.innerHTML = `<strong>TÍTULO:</strong> ${tarea.titulo}`;

        let botonBorrar = document.createElement("button");
        botonBorrar.textContent = `Borrar Tarea: ${tarea.titulo}`;
        botonBorrar.onclick = () => borrarTarea(tarea.titulo);

        div.appendChild(parrafo);
        div.appendChild(botonBorrar);
        divContenedor.appendChild(div);
    }

    window.borrarTarea = function(tituloTarea) {
        fetch(`http://localhost:3000/tasks/${tituloTarea}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('La solicitud para borrar la tarea ha fallado: ' + response.statusText);
                }
                return response.json();
            })
            .then(() => {
                // Eliminar el elemento de la tarea del DOM
                let tareaElemento = document.getElementById(`tarea-${tituloTarea}`);
                if (tareaElemento) {
                    tareaElemento.remove();
                }
                console.log(`La tarea "${tituloTarea}" ha sido eliminada.`);
            })
            .catch(error => {
                console.error('Ha ocurrido un error al intentar borrar la tarea:', error);
            });
    };

    hacerPeticion("http://localhost:3000/tasks", manejarJson);
});