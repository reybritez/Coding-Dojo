var count = 1;
var countElement = document.querySelector("#count")

console.log(countElement)

function add1() {
    count++;
    countElement.innerText = "La cuenta es " + count
    console.log(count)
}

function substract1() {
    count = count -1;
    countElement.innerText = "La cuenta es " + count
    console.log(count)
}

function hola(elemento){
    console.log(elemento)
}