var items = [5,3,215,68,216,7,6,2,9];

function cambio(arr, izq, der){
    var temp = arr[izq];
    arr[izq] = arr[der];
    arr[der] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //encuentra el elemento central siempre
        i       = left, //i representa al indice izquierdo
        j       = right; //j representa al indice derecho
    while (i <= j) { // mientras que el indice izq sea menor o igual que el indice der
        while (items[i] < pivot) { // y mientras que el valor del indice i sea menor al pivot
            i++; //cambia de pos
        }
        while (items[j] > pivot) { // lo mismo con el item der
            j--;  //cambia de pos hacia la izq
        }
        if (i <= j) { //si es que el indice izq es menor o igual al indice der
            cambio(items, i, j); //cambia los items
            i++; //cambia de pos hacia la derecha
            j--; //cambia de pos hacia la izq
        }
    }
    return i; //devuelve el indice izq
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //aca recibe el indice en el que se encontraron
        if (left < index - 1) { //si hay mas elementos del lado izq
            quickSort(items, left, index - 1); 
        }
        if (index < right) { //o mas elementos del lado derecho 
            quickSort(items, index, right);
        }
    }
    return items;
}
// llamada
var ordenao = quickSort(items, 0, items.length - 1);
console.log(ordenao); //[2,3,5,6,7,9,68,215,216]