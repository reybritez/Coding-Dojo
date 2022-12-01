var count1 = 0;
var count2 = 0;
var count3 = 0;
var caja1 = document.querySelector(".caja1 .linea-sup h4")
var caja2 = document.querySelector(".caja2 .linea-sup h4")
var caja3 = document.querySelector(".caja3 .linea-sup h4")
function addLikeC1(elemento) {
    // Que estoy tratando de hacer? Ver si es que puedo agarrar de alguna forma de acuerdo al numero de caja seleccionado el padre para poder hacerle un cambio a un elemento en paralelo 
    count1++;
    caja1.innerText = count1 + " likes"
    console.log(count)
}
function addLikeC2(elemento) {
    // Que estoy tratando de hacer? Ver si es que puedo agarrar de alguna forma de acuerdo al numero de caja seleccionado el padre para poder hacerle un cambio a un elemento en paralelo 
    count2++;
    caja2.innerText = count2 + " likes"
    console.log(count)
}
function addLikeC3(elemento) {
    // Que estoy tratando de hacer? Ver si es que puedo agarrar de alguna forma de acuerdo al numero de caja seleccionado el padre para poder hacerle un cambio a un elemento en paralelo 
    count3++;
    caja3.innerText = count3 + " likes"
    console.log(count)
}