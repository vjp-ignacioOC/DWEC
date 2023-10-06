/*
    Crea una función que recibe 3 parámetros con valores por defecto (producto → “Producto genérico”, precio → 100, impuestos → 21).
    La función convierte las entradas a cadena, entero y entero.
    Si no se pudiesen convertir las entradas, devolvería los valores por defecto.
    Prueba esta función varias veces, omitiendo valores y poniendo valores incorrectos.
 */

function conversion(producto = "Producto genérico", precio = 100, impuestos = 21) {
    console.log("El producto es " + producto + ", el precio es " + +precio + " y su impuesto es " + +impuestos);
}

let prod = "asdf";
let prec = 12;
let imp = 2;

let prod2 = 12;
let prec2 = true;
let imp2 = "45";

conversion(prod,prec,imp);
conversion(prod2, prec2, imp2);
conversion(prod, );