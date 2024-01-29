// main3.js

// Selección del elemento de la tabla
const tabla = document.getElementById('styled-table');
let tbody;

// Inicialización de variables
let columnCount = 0;
let theadCreated = false;

// Eventos de click para los botones
const botonNuevaColumna = document.getElementById('nuevaColumna');
const botonNuevaFila = document.getElementById('nuevaFila');
const botonReset = document.getElementById('resetearTabla');
const botonEliminarUltimaFila = document.getElementById('eliminarUltimaFila');
const botonEliminarUltimaColumna = document.getElementById('eliminarUltimaColumna');

botonNuevaColumna.addEventListener('click', agregarNuevaColumna);
botonNuevaFila.addEventListener('click', agregarNuevaFila);
botonReset.addEventListener('click', resetearTabla);
botonEliminarUltimaFila.addEventListener('click', eliminarUltimaFila);
botonEliminarUltimaColumna.addEventListener('click', eliminarUltimaColumna);


// Función para agregar una nueva columna al thead
function agregarNuevaColumna() {
    columnCount++;

    if (!theadCreated) {
        // Si el thead no ha sido creado, créalo y agréguelo a la tabla
        const thead = document.createElement('thead');
        tabla.appendChild(thead);
        theadCreated = true;
    }

    // Crear un nuevo elemento th para la nueva columna y establecer su contenido
    const th = document.createElement('th');
    th.textContent = columnCount;

    // Agregar el nuevo th al thead
    tabla.querySelector('thead').appendChild(th);

    // Añadir celdas correspondientes a la nueva columna en las filas existentes
    for (let i = 0; i < tabla.rows.length; i++) {
        const fila = tabla.rows[i];
        const td = document.createElement('td');
        td.textContent = `(${i + 1}, ${columnCount})`;
        fila.appendChild(td);
    }
}

// Función para agregar una nueva fila al tbody
function agregarNuevaFila() {
    if (!tbody) {
        // Si el tbody no ha sido creado, créalo y agréguelo a la tabla
        tbody = document.createElement('tbody');
        tabla.appendChild(tbody);
    }

    const fila = tbody.insertRow();

    // Añadir celda para el número de la fila
    const numeroFila = fila.insertCell();
    numeroFila.textContent = tabla.rows.length;

    // Añadir celdas a la nueva fila para las columnas restantes
    for (let i = 1; i < columnCount; i++) {
        const td = fila.insertCell();
        td.textContent = `(${tabla.rows.length}, ${i + 1})`;
    }
}

// Función para eliminar la última fila del tbody
function eliminarUltimaFila() {
    if (tbody && tbody.rows.length > 0) {
        tbody.deleteRow(tbody.rows.length - 1);
    }
}

// Función para eliminar la última columna del thead y las celdas correspondientes en el tbody
function eliminarUltimaColumna() {
    if (columnCount > 0) {
        columnCount--;

        // Eliminar la última columna del thead
        const thead = tabla.querySelector('thead');
        thead.removeChild(thead.lastChild);

        // Eliminar las celdas correspondientes en el tbody
        for (let i = 0; i < tbody.rows.length; i++) {
            const fila = tbody.rows[i];
            fila.deleteCell(fila.cells.length - 1);
        }
    }
}

// Función para resetear la tabla
function resetearTabla() {
    // Reiniciar variables y recargar la página
    // columnCount = 0;
    // theadCreated = false;
    // tbody = null;
    window.location.reload();
}
