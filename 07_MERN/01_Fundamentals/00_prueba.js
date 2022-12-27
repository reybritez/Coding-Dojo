//SCOPE local & global

/* var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo); */

//Desestructuración
/* const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

// DESPUÉS DE ES6
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;


console.log(password)
console.log(secondAnimal)

const { password: hashedPassword } = person;
console.log(hashedPassword) */
/* 
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
};

const { addresses: [whiteHouse, sherlock] } = person;
console.log(sherlock)

const { addresses: [ , { city: london }] } = person; //vuelve a abrir el dict
console.log(london);

const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(otherAnimals)

const { firstName, lastName, ...attributes } = person;
console.log(attributes)

const personCopy = {...person}
console.log(personCopy === person)
console.log(personCopy.addresses === person.addresses)
*/

/* const sayHello = (name) => {
    console.log(`Hello ${name}`);
  }; 

const sayHello = name => console.log(`Hello ${name}`);

sayHello("Steven")*/

/* var square = function(n) {
    return n * n;
}; 
const square = n => console.log(n * n);
square(10)*/

/* class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
              deck.push(this.createCard(suit, face));
            });
          });
      }
  } */

/* 
Number.prototype.isPrime = function() {
  for( let i=2; i<this; i++ ) {
    raiz =Math.sqrt(i);
      if( raiz % 1 === 0 && raiz === i){            
          return true;
      }
  }
  return false;
};

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

 */
/* const { performance } = require('perf_hooks');
const start = performance.now();

for (i=0 ; i<=1e2; i++) {
  if (i%7 == 0) {
    console.log(i);
  }
}

console.log(`This took ${performance.now() - start} milliseconds to run`); */

// 
/*
const { performance } = require('perf_hooks');
const start = performance.now();
 
for (i=0 ; i<=1e2; i++) {
  if (i%7 == 0) {
    console.log(i);
  }
} 

var array = [];
for (val=3; val<=99999; val+=3){
  array.push(val);
}
console.log(array);



console.log(`This took ${performance.now() - start} milliseconds to run`);*/


//CALLBACKS
/* setTimeout( function() { 
  console.log("start") 
}, 3000 );
    
console.log("end");
 */

/* const arr = Object.freeze([1,2,3,4]);
arr.push(300); // ya no se nos permite cambiar `arr` */


/* const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": "constant language from-rainbow">false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]); */

/* const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false }]; //SPREAD ... */
/* const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] ); //CONCAT
console.log(needThyme)

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
console.log(gotTheThyme)
 */

//FREEZE
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

//SORT
const sortedItems = [...items].sort()
console.log(sortedItems)
const sortedGroceries = [...items].sort( (a, b) => a.item < b.item ? 1 : -1);
console.log(sortedGroceries)

//MAP LI HTML
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

const values = [1, 2, 3, 4, 5];
//MAP VALORES
const cubes = values.map( val => val**3 ); //[1, 8, 27, 64, 125]

//FILTER
const evens = values.filter( val => val % 2 === 0 ); //Lista de valores solo pares

//FILTER INCLUDES
const oFoods = groceries.filter( item => item.includes("o") );

//FILTER Y MAP CONCATENADOS
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 ); //Filtra y devuelve al cubo los que quedan : [1, 27, 125]
