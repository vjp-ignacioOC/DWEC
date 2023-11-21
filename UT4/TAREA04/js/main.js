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
        div.innerHTML = `<p><strong>Id:</strong> ${this.id}</p>
                     <p><strong>userId:</strong> ${this.userId}</p>
                     <p><strong>Titulo:</strong> ${this.titulo}</p>
                     <p><strong>Contenido:</strong> ${this.contenido}</p>`;
        return div;
    }
}

document.addEventListener('DOMContentLoaded', function () {
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
                contenedor.appendChild(post.toDiv());
            }
        })
        .catch(error=>console.log(error.message));
})



