
const tabla = document.getElementById('styled-table');

const tbody = document.getElementById('tbody');

const thead = document.getElementById('thead');

const botonNuevaColumna = document.getElementById('nuevaColumna');
const botonNuevaFila = document.getElementById('nuevaFila');
const botonReset = document.getElementById('resetearTabla');

botonNuevaFila.addEventListener('click', function () {
    insertarFila();
});

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

botonReset.addEventListener('click', function () {
    window.location.reload()
});



botonNuevaColumna.addEventListener('click', function () {
    insertarColumna();
});

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