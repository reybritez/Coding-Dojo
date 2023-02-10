function quicksort(arrNums) {
  if (arrNums.length <= 2) {
    return arrNums;
  } else {
    let pivote = arrNums[0];
    let numerosIzq = [];
    let numerosDer = [];

    for (let i = 1; i < arrNums.length; i++) {
      arrNums[i] <= pivote
        ? numerosIzq.push(arrNums[i])
        : numerosDer.push(arrNums[i]);
    }
    return [...quicksort(numerosIzq), pivote, ...quicksort(numerosDer)];
  }
}

let paordenar = [1, 3, 34, 1, 2, 4, 1, 5, 9, 29, 21];

console.log(quicksort(paordenar));
