
const tabla = document.getElementById('styled-table');

const tbody = document.getElementById('tbody');

const thead = document.getElementById('thead');

const botonNuevaColumna = document.getElementById('nuevaColumna');
const botonNuevaFila = document.getElementById('nuevaFila');
const botonReset = document.getElementById('resetearTabla');
const botonEliminarUltimaFila = document.getElementById('eliminarUltimaFila');
const botonEliminarUltimaColumna = document.getElementById('eliminarUltimaColumna');


botonNuevaFila.addEventListener('click', function () {
    insertarFila();
});
botonEliminarUltimaFila.addEventListener('click', eliminarUltimaFila);

function insertarFila() {
    let nuevoTr = document.createElement('tr');

    let numeroDeTd = document.querySelectorAll('tr:last-child td');

    let siguienteNumeroTh = parseInt(document.querySelector('#tbody tr:last-child th').textContent);
    nuevoTr.innerHTML = `
    <th>${siguienteNumeroTh + 1}</th>
    `;

    for (let i = 0; i < numeroDeTd.length; i++) {
        let nuevoTd = document.createElement('td');
        nuevoTd.innerHTML = `
            <input type="text">
        `;
        nuevoTr.appendChild(nuevoTd);
    }
    tbody.appendChild(nuevoTr);
}

function eliminarUltimaFila() {
    if (tbody && tbody.rows.length > 0) {
        tbody.deleteRow(tbody.rows.length - 1);
    }
}

botonReset.addEventListener('click', function () {
    window.location.reload()
});



botonNuevaColumna.addEventListener('click', function () {
    insertarColumna();
});
botonEliminarUltimaColumna.addEventListener('click', eliminarUltimaColumna);

function insertarColumna() {
    let siguienteNumeroTh = parseInt(document.querySelector('#thead tr th:last-child').textContent);
    let nuevoThEnTHead = document.querySelector('#thead tr');
    let todosLosTr = document.querySelectorAll('#tbody tr');
    let nuevoTh = document.createElement('th')
    console.log(todosLosTr);

    nuevoTh.innerHTML = `
    <th>${siguienteNumeroTh + 1}</th>
   `;

    nuevoThEnTHead.appendChild(nuevoTh);

    for (let i = 0; i < todosLosTr.length; i++) {
        // Crear un nuevo td en cada iteración
        let nuevoTd = document.createElement('td');
        nuevoTd.innerHTML = `
        <input type="text">
    `;
        todosLosTr[i].appendChild(nuevoTd);
    }

}
function eliminarUltimaColumna() {
    if (thead && thead.rows.length > 0 && tbody && tbody.rows.length > 0) {
        // Eliminar la última columna del thead
        thead.rows[0].deleteCell(thead.rows[0].cells.length - 1);

        // Eliminar las celdas correspondientes en el tbody
        for (let i = 0; i < tbody.rows.length; i++) {
            tbody.rows[i].deleteCell(tbody.rows[i].cells.length - 1);
        }
    }
}