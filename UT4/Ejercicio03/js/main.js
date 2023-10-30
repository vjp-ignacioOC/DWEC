class Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
      this.numRuedas = 2;
      this.velocidadMaxima = 120;
      this.velocidadActual = 0;
      this.marca = marca;
      this.aceleracion = aceleracion;
      this.desaceleracion = desaceleracion;
      this.encendida = false;
}

    arrancar() {
        console.log("Se mete y gira la llave, la moto arranca.");
        this.encendida = true;
    }

    acelerar() {
        if (this.encendida) {
        //     this.velocidadActual += this.aceleracion;
        //     if(this.velocidadActual > this.velocidadMaxima) {
        //         console.log("No puedes sobrepasar 120 km/h");
        //         this.velocidadActual = 120;
        //     }
            this.velocidadActual = Math.min(this.velocidadActual + this.aceleracion, this.velocidadMaxima);
        }
    }

    frenar() {
        if (this.encendida) {
            // this.velocidadActual -= this.desaceleracion;
            // if (this.velocidadActual == 0) {
            //     console.log("No puedes frenar a 0");
            //     this.velocidadActual = 1;
            // }
            this.velocidadActual = Math.max(this.velocidadActual - this.desaceleracion, 0);
        }
    }

    mostrarInfo() {
        console.log ("Marca: " + this.marca +
            "\n Número de ruedas: " + this.numRuedas +
            "\n Velocidad Actual: " + this.velocidadActual +
            "\n Velocidad Máxima: " + this.velocidadMaxima +
            "\n Aceleración: " + this.aceleracion +
            "\n Desaceleración: " + this.desaceleracion +
            "\n Encendida: " + this.encendida);
    }

}

let ciclomotor = new Ciclomotor("Kawasaki", 70, 20);
console.log("\nLa moto inicialmente: ");
ciclomotor.mostrarInfo();
console.log("\nLa moto tras acelerar: ");
ciclomotor.acelerar(); // No debería hacer nada con la moto apagada
ciclomotor.mostrarInfo();
console.log("\nLa moto tras arrancarla y acelerar: ");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("Volvemos a acelerar: ");
ciclomotor.acelerar(); //No podrá pasar de 120km/h
ciclomotor.mostrarInfo();
console.log("Frenamos la moto: ");
ciclomotor.frenar();
ciclomotor.mostrarInfo();

class Motocross extends Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        super(marca, aceleracion, desaceleracion);
        super.velocidadMaxima = 90;
        this.marchaActual = 0;
    }

    arrancar() {
        super.arrancar();
        console.log("Y también se quita la pata de cabra.");
    }

    acelerar() {
        super.acelerar();
        if (this.velocidadActual > 0 && this.velocidadActual <= 10) {
            this.marchaActual = 1;
        } else if (this.velocidadActual > 10 && this.velocidadActual <= 30) {
            this.marchaActual = 2;
        } else {
            this.marchaActual = 3;
        }
    }

    frenar() {
            super.frenar();
            if (this.velocidadActual > 0 && this.velocidadActual <= 10) {
                this.marchaActual = 1;
            } else if (this.velocidadActual > 10 && this.velocidadActual <= 30) {
                this.marchaActual = 2;
            } else {
                this.marchaActual = 3;
            }
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log("\n Marcha Actual: " + this.marchaActual);
    }
}

console.log("\n\nPrubas de la moto de motocross\n\n");
let motoMotocross = new Motocross("Honda", 10, 5);
console.log("\nLa moto actualmente: ")
motoMotocross.mostrarInfo();

console.log("\nLa moto tras acelerar: ");
motoMotocross.acelerar(); //sin arrancarla no debería mostrar nada
motoMotocross.mostrarInfo();

console.log("\nLa moto tras arrancar y acelerar: ");
motoMotocross.arrancar();
motoMotocross.acelerar();
motoMotocross.mostrarInfo();

console.log("\nVolvemos a acelerar: ");
motoMotocross.acelerar();
motoMotocross.mostrarInfo();

console.log("\nFrenamos la moto: ")
motoMotocross.frenar();
motoMotocross.mostrarInfo();

class Scooter extends Ciclomotor {
    constructor (marca) {
        super(marca);
        this.aceleracion = 25;
        this.desaceleracion = 15;
    }

    arrancar() {
        console.log("Se acerca la llave y se pulsa el botón, la moto arranca");
        this.encendida = true;
    }

    acelerar() {
        super.acelerar();
    }

    frenar() {
        super.frenar();
    }

    mostrarInfo() {
        super.mostrarInfo();
    }

}

console.log("\n\nPruebas de la scooter\n\n");
let scooter = new Scooter("Yamaha");
console.log("La scooter inicialmente: ");
scooter.mostrarInfo();
console.log("La scooter tras acelerar: ");
scooter.acelerar(); //Sin arrancar, no debería acelerar
scooter.mostrarInfo();
console.log("La scooter tras arrancarla y acelerar: ");
scooter.arrancar();
scooter.acelerar();
scooter.mostrarInfo();
console.log("Volvemos a acelerar: ");
scooter.acelerar();
scooter.mostrarInfo();
console.log("Frenamos la scooter: ");
scooter.frenar();
scooter.mostrarInfo();