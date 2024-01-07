// Permite escribir en un fichero lo usaremos como base de datos para mantener los cambios
var fs = require("fs");
// Soluciona error CORS
const cors = require('cors');
// Creamos una instancia de express y le decimos que va a usar JSON
var express = require("express");
var app = express();
app.use(express.json());
// Evitar CORS
app.use(cors({
    origin: 'http://localhost:63342' //4200
}));

var url = "/tasks";

// Abrimos el puerto de escucha al 3000 y una vez abierto mostramos un mensaje.
app.listen(3000, () => console.log("El servidor está escuchando en el puerto 3000"));

// Creamos una variable JSON
var destinosFichero = "db/tasks.json";
// Leemos el listado de destinos almacenados en JSON
var misDestinos = JSON.parse(fs.readFileSync(destinosFichero));

// Devolvemos una respuesta sobre una petición GET dinámica
// Parámetros req = request, res = response, next
app.get(url, (req,res,next) => {
    res.json(misDestinos);
});

// Almacenamos un valor de una petición POST

app.post(url, (req, res) => {
    misDestinos.push(req.body);
    fs.writeFileSync("db/tasks.json", JSON.stringify(misDestinos, null, 2));
    res.json(misDestinos);
});

// Actualizamos un valor introduciendo su nombre por parámetros

app.put(url+"/:titulo", (req, res) => {
    let nameIndex = misDestinos.findIndex(tarea => tarea.titulo === req.params.titulo);
    if (nameIndex >= 0 && req.body) {
        if (typeof req.body === 'object' && req.body.hasOwnProperty('titulo')) {
            misDestinos[nameIndex] = {...misDestinos[nameIndex], ...req.body};
            fs.writeFileSync(destinosFichero, JSON.stringify(misDestinos, null, 2));
            res.json(misDestinos[nameIndex]);
        } else {
            res.status(400).json({ error: "La estructura del cuerpo de la petición no es válida." });
        }
    } else {
        res.status(404).json({ error: "Título no encontrado o cuerpo de la petición inválido." });
    }
});


// Cambios en tasks.js

// Borramos un valor introduciendo su nombre por parámetros
app.delete(url + "/:titulo", (req, res) => {
    const tituloTarea = req.params.titulo;
    const tareaIndex = misDestinos.findIndex(tarea => tarea.titulo === tituloTarea); // <-- Aquí está el cambio

    if (tareaIndex >= 0) {
        misDestinos.splice(tareaIndex, 1);
        fs.writeFileSync(destinosFichero, JSON.stringify(misDestinos, null, 2));
        res.json(misDestinos);
    } else {
        res.status(404).json({ error: "Título no encontrado o cuerpo de la petición inválido." });
    }
});
