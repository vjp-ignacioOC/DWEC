let urlJson = 'https://jsonplaceholder.typicode.com/posts';
let contenedor = document.getElementById("contenedorEntradas");

class Post {
    constructor(objPost) {
        this.id = objPost.id;
        this.userId = objPost.userId;
        this.titulo = objPost.title;
        this.contenido = objPost.body;
    }

    toDiv() {
        let div = document.createElement("div");
        div.innerHTML = `<p><strong>TITULO</strong>: ${this.titulo}</p>
        <div>
        <p><strong>Contenido</strong>: ${this.contenido}</p>
        <button class="mostrarUsuario">Usuario del Post</button>
        <button class="mostrarComentarios">Mostrar comentarios</button>
        <div class="usuario d-none">
            <p><strong>NOMBRE USUARIO: </strong> <span id="nombreUser-${this.id}"></span></p>
        </div>
        <div class="comentarios d-none" id="comentarios-${this.id}">
            <p><strong>Comentarios: </strong></p>
        </div>
    </div>`;
        return div;
    }
}




//Cuando todo el DOM está cargado, procede a llamar al método cargarPosts()
//Hace referencia a cuando la estructura del HTML está completa.
document.addEventListener("DOMContentLoaded", function () {
    cargarPosts();
});

//La petición Ajax del enlace
function cargarPosts() {
    fetch(urlJson)
        .then(response => response.json())
        .then (objJSON=> {
            let posts = [];
            for (let postObj of objJSON) {
                posts.push(new Post(postObj));
            }
            return posts;
        })
        .then (posts=> {
            for (let post of posts) {
                let div = contenedor.appendChild(post.toDiv());
                crearPost(post, div);
            }

        })
        .catch(error=>console.log(error.message));
}

// Pintamos cada post con esta funcion
function crearPost(post, div) {
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



