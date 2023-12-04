/*API https://randomuser.me/api/?results=10
/

/ Recogida de campos */
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
        this.id = objPost.id;
        this.userId = objPost.userId;
        this.titulo = objPost.title;
        this.contenido = objPost.body;
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
        .then(pers => {
            mostrarInfo(pers);
        })
        .catch(error=>console.log(error.message));
}

function mostrarInfo(pers) {
    botonNombre.addEventListener('click', function () {
        mostrarNombre(pers)
    })
}

function mostrarTitulo(posts) {
    posts.results.forEach (elemento => {
        let post = new Post(elemento);
        crearLi(post, listaNombre);
    })
}

function crearLi(post, ul) {
    let li = document.createElement('li');
    li.innerText = post.getContenido();
    ul.appendChild(li);
}

