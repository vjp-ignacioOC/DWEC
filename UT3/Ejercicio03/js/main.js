/*
    Crea una función cambiarATwitter que haga lo siguiente:
1.- Seleccione el nodo a.
2.- Lo modifique para que su id sea “aTwitter”.
3.- El enlace cambie a la dirección de twitter (https://www.twitter.com).
4.- El contenido textual del nodo sea “Twitter”.
5.- Compruebe que el nodo tiene el atributo “title” y sólo en ese caso cambia el title a “Ir a Twitter”.

 */

function cambiarATwitter() {
    // 1.-
    const elemento = document.querySelector('a');

    // 2.-
    elemento.id = "aTwitter";

    // 3.-
    elemento.href = "https://www.twitter.com";

    // 4.-
    elemento.textContent = "Twitter";

    // 5.-
    if (elemento.hasAttributes("title")){
        elemento.setAttribute("title", "Ir a Twitter");
    }
}
cambiarATwitter();