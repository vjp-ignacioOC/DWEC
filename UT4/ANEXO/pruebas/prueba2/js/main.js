

let prometoLimpiar = new Promise(function (resolve, reject) {
    let limpia = true;
    if (limpia) {
        resolve("está limpia");
    } else {
        reject("sigue sucia")
    }
});

function cuandoFunciona(valorDesdeResolve) {
    console.log(valorDesdeResolve);
}

function cuandoNoSeCumple (valorDesdeReject) {
    console.log(valorDesdeReject);
}

prometoLimpiar.then(cuandoFunciona).catch(cuandoNoSeCumple);