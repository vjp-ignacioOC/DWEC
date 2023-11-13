

// let traerCarreras = new Promise(function (resolve, reject) {
//     let peticionAjax = new XMLHttpRequest();
//     peticionAjax.addEventListener("readystatechange", function (e) {
//         if (peticionAjax.readyState === 4) {
//              if (peticionAjax.status === 200) {
//                  resolve(this.responseText);
//              } else {
//                  reject(this.statusText);
//              }
//          }
//     });
//     peticionAjax.open("get", "http://ergast.com/api/f1/2004/1/results.json");
//     peticionAjax.send();
// });

function traerRecurso (url) {
    return new Promise(function (resolve, reject) {
        let peticionAjax = new XMLHttpRequest();
        peticionAjax.addEventListener("readystatechange", function (e) {
            if (peticionAjax.readyState === 4) {
                if (peticionAjax.status === 200) {
                    resolve(this.responseText);
                } else {
                    reject(this.statusText);
                }
            }
        });
        peticionAjax.open("get", url);
        peticionAjax.send();
    });
}

traerRecurso("http://ergast.com/api/f1/2004/1/results.json").then(function (respuesta) {
    console.log(respuesta)
}).catch(function (error) {
    console.log(error)});