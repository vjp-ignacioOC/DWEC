document.addEventListener('DOMContentLoaded', (event) => {
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
        jsonPrueba.forEach(post => {
            crearPost(post);
        });
    }
    function crearPost(post) {
        let div = document.createElement("div"); // variable para crear un div
        div.innerHTML = `
            <p><strong>TÍTULO:</strong>${post.titulo}</p>
            <div>
               <p>${post.descripcion}</p>
               <p>${post.estado}</p>
               <p>${post.fecha}</p>
               <p>${post.hora}</p>
            </div>`;
        let divContenedor = document.getElementById("contenedorEntradas");
        divContenedor.appendChild(div);

    }
    hacerPeticion("http://localhost:3000/tasks", manejarJson);
})