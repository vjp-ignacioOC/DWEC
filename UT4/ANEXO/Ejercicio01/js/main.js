

let prometoLimpiar = new Promise(function (resolve, reject) {
    setTimeout(()=>{
        let limpia = Math.random();
        if (limpia > 0.5) {
            resolve("está limpia");
        } else {
            reject("sigue sucia")
        }
        }, 1000);

});

function cuandoFunciona(valorDesdeResolve) {
    console.log(valorDesdeResolve);
}

function cuandoNoSeCumple (valorDesdeReject) {
    console.log(valorDesdeReject);
}

prometoLimpiar.then(cuandoFunciona).catch(cuandoNoSeCumple);

