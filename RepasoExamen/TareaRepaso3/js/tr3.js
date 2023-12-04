/*API https://randomuser.me/api/?results=10
/

/ Recogida de campos */
// el botón de nombre muestra el contenido de los posts
let botonNombre = document.getElementById("botonNombres");
let listaNombre = document.getElementById("listaNombres");

let botonEdad = document.getElementById("botonEdad");
let inputEdad = document.getElementById("edad")
let listaedad = document.getElementById("listaEdad");

let botonNacion = document.getElementById("botonNacion");
let inputnacion = document.getElementById("nacion")
let listaNacion = document.getElementById("listaNacion");

const urlJson = 'https://jsonplaceholder.typicode.com/posts';
class Post {
    constructor(post) {
        this.id = post.id;
        this.userId = post.userId;
        this.titulo = post.title;
        this.contenido = post.body;
    }

    getId() {
        return this.id;
    }

    getUserId() {
        return this.userId;
    }

    getTitulo() {
        return this.titulo;
    }

    getContenido() {
        return this.contenido;
    }
}
cargarNombrePersonas();
function cargarNombrePersonas() {
    fetch(urlJson)
        .then(response => response.json())
        .then(posts => {
            botonNombre.addEventListener('click', function () {
                mostrarContenido(posts);
            })
        })
        .catch(error=>console.log(error.message));
}

// function mostrarInfo(post) {
//     botonNombre.addEventListener('click', function () {
//         mostrarContenido(post)
//     })
// }

function mostrarContenido(posts) {
    for (let i = 0; i < posts.length; i++) {
        let post = new Post(posts[i]);
        crearLi(post, listaNombre);
    }

}

function crearLi(post, ul) {
    let li = document.createElement('li');
    li.innerText = post.getContenido();
    ul.appendChild(li);
}

