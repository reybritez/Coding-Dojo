function changeName() {
    var name = prompt("Change your name", "Enter name");
    var boxNombre = document.querySelector(".box h2")
    if (name != null) {
        return boxNombre.innerText = name;
    }
}

var aux = 0
function accept(elemento) {
    div_padre= elemento.parentElement.parentElement;
    // console.log(div_padre);
    var suma = document.querySelector(".conreq-2 .caja3 .cabecera3 h1 button")
    var total= suma.textContent
    var totalToNum = Number(total)
    aux = totalToNum;
    aux = aux + 1;
    suma.innerText = aux
    div_padre.remove()

}

function deny(elemento) {
    div_padre= elemento.parentElement.parentElement;
    div_padre.remove()
}