//Siempre hambriento
function siempreHambriento(arr) {
    var long = arr.length
    for (var i=0; i<=long; i++) {
        if (!arr.includes("comida")) {
            for (a=1; i<1; i++) {
                console.log("Tengo Hambre")
            }
        }else {
            if (arr[i] === "comida") {
                console.log("delicioso")
            }
        }
    }
}

// const prueba1 = siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// // esto debería mostrar "delicioso, "delicioso"
// const prueba2 = siempreHambriento([4, 1, 5, 7, 2]);
// // esto debería mostrar "Tengo hambre"
// const prueba3 = siempreHambriento([1,2,5,51,6,"prueba","comida", "comida"])
// const prueba4 = siempreHambriento([1,2,3, "sincomida"])

// Filtro paso alto highPass
function highPass(arr, cutoff) {
    var filteredArr = [];
    if (arr.includes(cutoff)){
        for (i=0; i<=arr.length; i++) {
            if (arr[i] > cutoff) {
                filteredArr.push(arr[i])
            }
        }
    }
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//Mejor que el promedio
function betterThanAverage(arr) {
    var sum = 0;
    var prom = 0;
    var totalNum = arr.length
    for (i=0; i<totalNum; i++) {
        sum = sum + arr[i];
        prom = sum / totalNum;
        console.log(sum)
    }
    var count = 0;

}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta