const tabla = document.getElementById('styled-table');

const tbody = document.getElementById('tbody');

const thead = document.getElementById('thead');

const botonNuevaColumna = document.getElementById('nuevaColumna');
const botonNuevaFila = document.getElementById('nuevaFila');
const botonReset = document.getElementById('resetearTabla');

// Damos la funcionalidad a los botones
botonNuevaFila.addEventListener('click', function () {
    insertarFila();
})
botonNuevaColumna.addEventListener('click', function () {
    insertarColumna();
})
botonReset.addEventListener('click', function () {
    resetarTabla();
})

function insertarColumna() {
    // Creamos la variable siguienteNumeroTh, que, lo que haremos será, ver cuántos th hay en el tr del thead, coger el contenido y, con el parseInt, convertir ese contenido a un entero.
    let siguienteNumeroTh = parseInt(document.querySelector('#thead tr th:last-child').textContent);
    let nuevoThEnTHead = document.querySelector('#thead tr');
    let todosLosTr = document.querySelectorAll('#tbody tr');
    let nuevoTh = document.createElement('th')

    // De la línea 24 hasta la 27: hemos creado un nuevo th en la variable nuevoTh con el createElement, y, dentro de ese th, introduciremos la variable que creamos antesy le sumaremos 1 para así, el th creado aparezca el siguiente número y, para terminar, introduciremos el th creado a la nueva columna, que la hemoscreado en la variable nuevoThenThead
    nuevoTh.innerHTML = `
    <th>${siguienteNumeroTh + 1}</th>
   `;
    nuevoThEnTHead.appendChild(nuevoTh);

    // Al crear la nueva columna y haber creado el th en el thead,con el bucle lo que creamos son todas las celdas correspondientes, recorriendo elnúmero de filasque hay en el body
    for (let i = 0; i < todosLosTr.length; i++) {
        // Crear un nuevo td en cada iteración
        let nuevoTd = document.createElement('td');
        nuevoTd.innerHTML = `
        <input type="text">
    `;
        todosLosTr[i].appendChild(nuevoTd);
    }

}

function insertarFila() {
    //Creamos la variable nuevoTr para poder insertarla en la tabla
    let nuevoTr = document.createElement('tr');
    //numeroDeTd es un array que recoge elnumero de celdas (los td) que tiene, en este caso, la ultima fila
    let numeroDeTd = document.querySelectorAll('tr:last-child td');
    // Al igual que en insertarColumnas, cogemos el th del último tr y lo convertimosen un entero con el parseInt, para luego ponerlo dentro de la nueva tr y sumándole 1
    let siguienteNumeroTh = parseInt(document.querySelector('#tbody tr:last-child th').textContent);
    nuevoTr.innerHTML = `
    <th>${siguienteNumeroTh + 1}</th>
    `;
    // Con el bucle for, recorremos el array creado anteriormente y vamos introduciendo celdas
    for (let i = 0; i < numeroDeTd.length; i++) {
        let nuevoTd = document.createElement('td');
        nuevoTd.innerHTML = `
            <input type="text">
        `;
        nuevoTr.appendChild(nuevoTd);
    }
    // Una vez completada la tr, la introducimos al body
    tbody.appendChild(nuevoTr);
}

// Reseteamos la tabla actualizando la página
function resetarTabla() {
    // Actualizamos la página para que vuelva al estado original de 3x3
    window.location.reload();
}