//01

/* 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output -> DONE
console.log(randomCar) // Tesla
console.log(otherRandomCar) //Mercedes 
*/

//02
/* 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output ->DONE
console.log(name); //predict: undefined //Real: is not defined
console.log(otherName); //Elon
*/

//3
/* 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  //Predict:not exists
//Predict the output -> CASI
console.log(password); // 12345
console.log(hashedPassword); // undefined
*/


//4
/* 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2 
//Predict the output -> DONE
console.log(first == second); //predict: false
console.log(first == third); //predict: true
*/

//5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; 
const { secondKey } = lastTest; 
const [ ,willThisWork] = secondKey; //not defined
//Predict the output -> CASI
console.log(key); //value
console.log(secondKey); // [1,5...,3]
console.log(secondKey[0]); // 1
console.log(willThisWork); //not defined ???
