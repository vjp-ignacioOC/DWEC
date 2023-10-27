class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.tipo = 1;
    }

    saludo() {
        console.log(`Hola soy ${this.nombre}`);
    }

    decirTipo() {
        console.log("Soy un usuario de "+this.tipo);
    }
}

class Administrador extends Usuario {
    constructor(nombre) {
        super(nombre);
        this.tipo = 2;
    }

    decirTipo() {
        super.decirTipo();
        console.log("Y también soy un administrador");
    }
}

let admin = new Administrador("antonio");
admin.saludo();
admin.decirTipo();