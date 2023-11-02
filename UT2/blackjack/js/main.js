

function construirMazo() {
    let paloCarta = ['Picas', 'Diamantes', 'Treboles', 'Corazones'];
    let valorCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jota', 'Reina', 'Rey'];
    let mazo = [];
    let valor = [];

    for (let i = 0; i < paloCarta.length; i++) {
        for (let j = 0; j < valorCarta.length; j++) {
            valor = [valorCarta[j], paloCarta[i]];
            mazo.push(valor);
        }
    }
    return mazo;
}

function calcularValorMano(cartasDelJugador) {

    let valor = 0;
    let valorCarta = '' ;

    for (let i = 0; i < cartasDelJugador.length; i++) {
        if (cartasDelJugador[i] === '1') {
            if (cartasDelJugador[i].value(0))
                valorCarta = 1;
        }
        if (valorCarta[i] === 'Jota' || valorCarta[i] === 'Reina' || valorCarta[i] === 'Rey') {
            valorCarta = 10;
        } else {
            valorCarta = cartasDelJugador[i];
        }
        valor += valorCarta;
    }

    return valor;
}

function turnoJugador(elemento) {
    //Cosas que el jugador hace
}


function turnoMaquina(elemento, elemento2) {
    //Turno de la máquina
}

function pintarInfoFinalJuego (elemento, elemento2) {
    // Info final
}


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

while (prompt("¿Quieres volver a jugar? (S/N)") === /"S"/g) {
    blackJack();
}