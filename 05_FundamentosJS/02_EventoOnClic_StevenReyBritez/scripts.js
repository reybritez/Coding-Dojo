function clicked(element) {
    var contenido = element.textContent
    document.body.innerHTML = document.body.innerHTML.replace(contenido, "Logout")
}

function remover(element) {
    var contenido = element
    contenido.remove()
}