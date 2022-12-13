// 1 - Imprimir impares 1-20 

function impares() {
    for (i=1; i<=20; i++) {
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}
//const impar = impares()
// ------------------------
// Disminuir múltiplos de 3 

function mult3() {
    for (i=1; i<=100; i++) {
        if (i % 3 == 0){
            console.log(i)
        }
    }
}
//const multi = mult3()
// ------------------------
// Imprime la secuencia

dec = 1.5 //valor decreciente
start = 4 //inicio
lim = -4 //limite
aux = 0
function secuencia() {
    while (lim<start) {
        console.log(start)
        start = start-1.5
    }
}

//const sec = secuencia()
// ------------------------
// Sigma

sum = 0
function sumatoria() {
    for (var i=1; i<=100; i++) {
        sum = sum + i
    }
    console.log(sum)
}

//const sigma = sumatoria()
// ------------------------
// Factorial

product = 1
function factorial() {
    for (var i=1; i<=12; i++) {
        product= product * i
    }
    console.log(product)
}

const prod = factorial()