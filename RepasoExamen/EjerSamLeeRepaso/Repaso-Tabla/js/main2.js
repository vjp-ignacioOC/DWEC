const tabla = document.getElementById('styled-table');
const tbody = document.getElementById('tbody');
const thead = document.getElementById('thead');
const botonNuevaColumna = document.getElementById('nuevaColumna');
const botonNuevaFila = document.getElementById('nuevaFila');
const botonReset = document.getElementById('resetearTabla');

let columnCount = 0;

// Función para añadir una nueva columna en el thead
const agregarNuevaColumna = () => {
    columnCount++;
    const th = document.createElement('th');
    th.textContent = columnCount;
    thead.appendChild(th);

    // Añadir celdas correspondientes a la nueva columna en el tbody
    for (let i = 0; i < tbody.children.length; i++) {
        const fila = tbody.children[i];
        const td = document.createElement('td');
        td.textContent = `(${i + 1}, ${columnCount})`;
        fila.appendChild(td);
    }
};

// Función para añadir una nueva fila en el tbody
const agregarNuevaFila = () => {
    // const fila = document.createElement('tr');
    //
    // // Añadir celdas a la nueva fila
    // for (let i = 1; i <= columnCount; i++) {
    //     const td = document.createElement('td');
    //     td.textContent = `(${tbody.children.length + 1}, ${i})`;
    //     fila.appendChild(td);
    // }
    //
    // tbody.appendChild(fila);
    // Función para agregar una nueva fila en el tbody

    // Crear un nuevo elemento tr para la nueva fila
    const fila = document.createElement('tr');

    // Añadir celda para el número de la fila
    const numeroFila = document.createElement('td');
    numeroFila.textContent = tbody.children.length + 1;
    fila.appendChild(numeroFila);

    // Añadir celdas a la nueva fila para las columnas restantes
    for (let i = 1; i < columnCount; i++) {
        const td = document.createElement('td');
        td.textContent = `(${tbody.children.length + 1}, ${i + 1})`;
        fila.appendChild(td);
    }

    // Agregar la nueva fila al tbody
    tbody.appendChild(fila);

};

// Función para resetear la tabla
const resetearTabla = () => {
    // columnCount = 0;
    // thead.innerHTML = '';
    // tbody.innerHTML = '';
    window.location.reload();
};

// Eventos de click para los botones
botonNuevaColumna.addEventListener('click', agregarNuevaColumna);
botonNuevaFila.addEventListener('click', agregarNuevaFila);
botonReset.addEventListener('click', resetearTabla);
