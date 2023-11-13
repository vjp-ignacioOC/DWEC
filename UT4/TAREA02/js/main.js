class Trabajador {
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora;
    }
    pintarInfo () {
        console.log("El trabajador " + this.nombre + " trabaja " + +this.numHorasSemanales + " horas a la semana con un salario por hora de " + +this.salarioPorHora + "€.");
    }

    getSaldoSemanal() {
        return (this.salarioPorHora * this.numHorasSemanales);
    }

}

class Restaurante {
    constructor(nombre) {
        this.nombre = nombre;
        this.trabajadores = [];
    }

    añadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }
    mostrarTrabajadores() {
        if (!this.trabajadores || this.trabajadores.length === 0) {
            console.log("No tiene trabajadores.")
        } else {
            this.trabajadores.forEach(trabajador => {
                console.log("- " + trabajador.nombre);
            });
        }

    }

    pintarInfo() {
        console.log("El restaurante " + this.nombre + " tiene los siguientes trabajadores: " );
        this.mostrarTrabajadores();
    }

    getPagosSemanales() {
        let totalPagas = 0;
        for (let i = 0; i < this.trabajadores.length; i++) {
            console.log("El saldo semanal de " + this.trabajadores[i].nombre + " es de: " + this.trabajadores[i].getSaldoSemanal() + "€")
            totalPagas += this.trabajadores[i].getSaldoSemanal();
        }
        return totalPagas;
    }

}

let restaurante = new Restaurante("La Tapería");
restaurante.pintarInfo();

restaurante.añadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.añadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.añadirTrabajador(new Trabajador("Marcos", 20, 10));
restaurante.pintarInfo();

console.log("Mantener a los empleados cuesta: " + restaurante.getPagosSemanales() + "€");