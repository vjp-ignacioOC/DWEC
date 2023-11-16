'use strict';
//Url dada en el ejercicio
let urlJson = 'https://jsonplaceholder.typicode.com/posts';

//Cuando todo el DOM está cargado, procede a llamar al método cargarPosts()
//Hace referencia a cuando la estructura del HTML está completa.
document.addEventListener("DOMContentLoaded", function () {
    cargarPosts();
});

//La petición Ajax del enlace
function cargarPosts() {
    let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener("load", function () {
        if (peticionAjax.readyState === 4 && peticionAjax.status === 200) {
            let datos = JSON.parse(peticionAjax.responseText);
            // Hacemos el foreach ya que el enlace nos devuelve un array, y queremos cada post de ese array
            datos.forEach((dato) => crearPost(dato));
        }
    });
    peticionAjax.open("GET", urlJson);
    peticionAjax.send();
}

// Pintamos cada post con esta funcion
function crearPost(post) {
    let contenedorEntradas = document.getElementById("contenedorEntradas");
    let div = document.createElement("div");
    div.classList.add("entrada");
    div.innerHTML =
        `<p><strong>TITULO</strong>: ${post.title}</p>
        <div>
            <p><strong>Contenido</strong>: ${post.body}</p>
            <button class="mostrarUsuario">Usuario del Post</button>
            <button class="mostrarComentarios">Mostrar comentarios</button>
            <div class="usuario d-none">
                <p><strong>NOMBRE USUARIO: </strong> <span id="nombreUser-${post.id}"></span></p>
            </div>
            <div class="comentarios d-none" id="comentarios-${post.id}">
                <p><strong>Comentarios: </strong></p>
            </div>
        </div>`;
    //Metemos el código html en el div que hemos creado
    contenedorEntradas.appendChild(div);

    // Creamos variables para dar la funcionalidada los botones de mostrar usuarios y comentarios

    // Creamos las variables para los botones
    let mostrarUsuario = div.querySelector(".mostrarUsuario");
    let mostrarComentarios = div.querySelector(".mostrarComentarios");

    // Creamos las variables para mostrar los usuarios y comentarios
    let usuarioDiv = div.querySelector(".usuario");
    let comentariosDiv = div.querySelector(".comentarios");

    // Funciones para mostrar cuando pulses el botón tanto los usuarios como los comentarios
    mostrarUsuario.addEventListener("click", function () {
        //EL toggle se utiliza para ver si está visible o no la varibale
        usuarioDiv.classList.toggle("d-none");
        // SI NO está visible, carga el usuario
        if (!usuarioDiv.classList.contains("d-none")) {
            cargarUsuario(post.userId, post.id);
        }
    });

    mostrarComentarios.addEventListener("click", function () {
        comentariosDiv.classList.toggle("d-none");
        if (!comentariosDiv.classList.contains("d-none")) {
            cargarComentarios(post.id);
        }
    });
}


// Funciones para cargar usuario y sus comentarios
function cargarUsuario(userId, postId) {
    let usuarioSpan = document.getElementById(`nombreUser-${postId}`);
    let urlUsuario = `https://jsonplaceholder.typicode.com/users/${userId}`;
    let peticionUsuario = new XMLHttpRequest();
    peticionUsuario.addEventListener("load", function () {
        if (peticionUsuario.readyState === 4 && peticionUsuario.status === 200) {
            let usuario = JSON.parse(peticionUsuario.responseText);
            usuarioSpan.textContent = usuario.name;
        }
    });
    peticionUsuario.open("GET", urlUsuario);
    peticionUsuario.send();
}

function cargarComentarios(postId) {
    let comentariosDiv = document.getElementById(`comentarios-${postId}`);
    let urlComentarios = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    let peticionComentarios = new XMLHttpRequest();
    peticionComentarios.addEventListener("load", function () {
        if (peticionComentarios.readyState === 4 && peticionComentarios.status === 200) {
            let comentarios = JSON.parse(peticionComentarios.responseText);
            comentarios.forEach((comentario) => {
                let p = document.createElement("p");
                p.textContent = `- ${comentario.name}`;
                comentariosDiv.appendChild(p);
            });
        }
    });
    peticionComentarios.open("GET", urlComentarios);
    peticionComentarios.send();
}
