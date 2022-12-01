var count = 0;
var countElement = document.querySelector(".linea-sup h4")

function addLike(elemento) {
    // Que estoy tratando de hacer? Ver si es que puedo agarrar de alguna forma de acuerdo al numero de caja seleccionado el padre para poder hacerle un cambio a un elemento en paralelo 
    
    selectorCajas =  document.getElementsByClassName("linea-sup")
    buscarSi = selectorCajas.includes(elemento)
    return console.log(buscarSi)

    // count++;
    // countElement.innerText = count + " likes"
    // console.log(count)
}