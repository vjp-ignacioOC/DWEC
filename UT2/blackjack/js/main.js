
// En esta función, creo el mazo de cartas, como bien dice en el tema, con dos bucles for.
function construirMazo() {
    // Creo el array de los palos
    let paloCarta = ['Picas', 'Diamantes', 'Treboles', 'Corazones'];
    // Creo el array de los valores de las cartas
    let valorCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jota', 'Reina', 'Rey'];
    let mazo = [];
    let valor = [];

    // Recorro los 2 arrays y los voy guardando en la variable mazo definida anteriromente
    for (let i = 0; i < paloCarta.length; i++) {
        for (let j = 0; j < valorCarta.length; j++) {
            // Le asigno el valor correspondiente a cada carta y la voy añadiendo al mazo
            valor = [valorCarta[j], paloCarta[i]];
            mazo.push(valor);
        }
    }
    return mazo;
}

// Como tenía que ser realista, he creado esta función para repartir cartas
function repartirCarta(mazo) {
    // Creo la variable carta y le doy el valor de una carta aleatoria del mazo, de ahí el math.random
    // Para que no se pase del tamaño del array, redondeo hacia abajo, de ahí el math.floor
    let carta = Math.floor(Math.random() * mazo.length);
    // Lo que hago con el método splice es, a parte de retornar la carta, borrarla del array para que no se pueda volver a repartir
    // Borra la carta en la posición 0, ya que sería la primera carta que hay en el mazo
    return mazo.splice(carta, 1)[0];
}

// En esta función, calculo el valor de las cartas del jugador o de la máquina
function calcularValorMano(cartas) {
    let valor = 0;
    let ases = 0;

    // Utilizo un bucle for of para calcular el valor de cada carta
    for (let carta of cartas) {
        // Con carta[0] me refiero al valor de la carta, es decir, si es 1, 2, 3, ..., Jota, Reina o Rey
        // Ya que, cada carta, es un array de (valor, palo)
        if (carta[0] === "Jota" || carta[0] === "Reina" || carta[0] === "Rey") {
            valor += 10;
        } else if (carta[0] === 1) {
            valor += 11;
            // Añado un as al contador de ases
            ases++;
        } else {
            valor += carta[0];
        }
    }

    // Si el valor es de +21 y hay algún as en las cartas, le quito 10 a ese valor, es decir, el as cuenta como 1
    while (valor > 21 && ases > 0) {
        valor -= 10;
        ases--;
    }

    return valor;
}

// La función que muestra lo que hace el jugador en su turno
function turnoJugador(mazo) {
    let cartasJugador = [];
    let continuar = true;

    // Mientras continuar siga siendo true, el jugador sigue pidiendo cartas
    do {
        // Al ser un bucle do while, entra 1 vez si o si
        let carta = repartirCarta(mazo);
        cartasJugador.push(carta);
        let valorJugador = calcularValorMano(cartasJugador);
        // Reparte una carta, y muestra las cartas que tiene el jugador y su valor
        console.log("Tus cartas: ");
        for (let carta of cartasJugador) {
            console.log(carta[0] + ' de ' + carta[1]);
        }
        console.log('Valor total: ' + valorJugador);

        // Según el valor, te dice si has ganado, perdido o si quieres pedir otra carta
        // en caso de que aceptes, el bucle se reinicia
        if (valorJugador === 21) {
            console.log("¡Blackjack! Has ganado.");
            continuar = false;
        } else if (valorJugador > 21) {
            console.log("Te has pasado de 21. Has perdido.");
            continuar = false;
        } else {
            continuar = confirm("¿Quieres pedir otra carta?");
        }
    } while (continuar)

    return cartasJugador;
}

// La función de los pasos en el truno de la máquina
function turnoMaquina(mazo, valorJugador) {
    let cartasMaquina = [];
    let valorMaquina = 0;

    // Mientras que el valor de la máquina sea menor al tuyo y sea menor o igual a 21, seguirá jugando
    while (valorMaquina < valorJugador && valorMaquina <= 21) {
        let carta = repartirCarta(mazo);
        cartasMaquina.push(carta);
        valorMaquina = calcularValorMano(cartasMaquina);
    }

    return cartasMaquina;
}

// En esta función, pintamos toda la información del juego, tanto las cartas del jugador como de la máquina, y su valor.
function pintarInfoFinalJuego(cartasJugador, cartasMaquina) {
    // Mediante un bucle for of, recorre las cartas del jugador, las muestra y dice su valor
    console.log("Cartas del jugador: ");
    for (let carta of cartasJugador) {
        console.log(carta[0] + ' de ' + carta[1]);
    }
    console.log('Valor total del jugador: ' + calcularValorMano(cartasJugador));

    // Mediante un bucle for of, recorre las cartas de la máquina, las muestra y dice su valor
    console.log("Cartas de la máquina: ");
    for (let carta of cartasMaquina) {
        console.log(carta[0] + ' de ' + carta[1]);
    }
    console.log(`Valor total de la máquina: ${calcularValorMano(cartasMaquina)}`);

    let valorJugador = calcularValorMano(cartasJugador);
    let valorMaquina = calcularValorMano(cartasMaquina);

    if (valorJugador > 21) {
        console.log("¡La máquina gana!");
    } else if (valorMaquina > 21 || valorJugador > valorMaquina) {
        console.log("¡Has ganado!");
    } else if (valorMaquina > valorJugador) {
        console.log("¡La máquina gana!");
    } else {
        console.log("¡Es un empate!");
    }
}

// Función dada en el ejercicio
function blackJack() {
    console.log("Creando el mazo...");
    let mazo = construirMazo();

    let cartasJugador = turnoJugador(mazo);
    let valorJugador = calcularValorMano(cartasJugador);

    if (valorJugador > 21) {
        alert("Has perdido la partida, has superado los 21 puntos.");
    } else {
        let cartasMaquina = turnoMaquina(mazo, valorJugador);
       pintarInfoFinalJuego(cartasJugador, cartasMaquina);
    }
}

while (confirm("¿Quieres jugar al BlackJack?") === true) {
    blackJack();
}