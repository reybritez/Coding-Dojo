/* Print 1-255
Print all the integers from 1 to 255 

for (i=1; i<=255; i++) {
    console.log(i)
}
*/

/* Print Sum 0-255
Print integers from 0 to 255, and with each integer print the sum so far 

var sum= 0
for (i=0; i<=255; i++) {
    sum = sum + i
    console.log(sum);
}
*/

/* Find and Print Max
Given an array, find and print its largest element.

arr = [2,3,5,6,7,1,9,51]

function maximo(arr) {
    const len = arr.length
    var max = 0
    for (i=0; i<len; i++) {
        if (arr[i] >= max ){
            max = arr[i]
        } else {
            continue
        }
    }
    console.log(max)
}
maximo(arr)
 */

/* Array with Odds
Create an array with all the odd integers between 1 and 255 (inclusive) 

var arr = [];
function createOddArray() {
    for (i=1; i<=255; i++) {
        if (i%2 == 1) {
            arr.push(i);
            console.log(arr); 
        } else {
            continue
        } 
    }
};

createarr= createOddArray();*/

/* Greater Than Y
Given an array and a value Y, count and print the number of array values greater than Y. 

function greaterThanY(arr, y) {
    totalItems = arr.length
    mayor = 0
    contador = 0
    mayores = []
    for (i=0; i<totalItems; i++){
        if (arr[i] >= y) {
            mayor = arr[i];
            mayores.push(arr[i]);
            contador = contador + 1
        } else {
            continue
        }
    }
    console.log(mayores)
    console.log(`Cantidad de items mayores a ${y} es igual a ${contador}`)
}

arrayEs = [2,5,7,8,2,3,7,23,7,2,77]

greaterThanY(arrayEs, 8)*/

/* Max, Min, Average
Given an array, print the max, min and average values for that array. */

function maxIs(arr) {
    long = arr.length
    for (i=0; i<long; i++) {
        console.log(arr[i])
    }
}

arry = [12,6,7,8,2,1,2,5]
const hola= maxIs(arry)