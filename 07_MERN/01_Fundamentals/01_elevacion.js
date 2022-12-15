//01 
//Given:
/* console.log(hello);  //undefined                         
var hello = 'world';    */

//Changed:
/* var hello = 'world';
console.log(hello);  */

//02
//Given: 
/* var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //magnet
} */

//Changed: 
/* var needle = 'haystack';
function test(){
    let needle = 'magnet'; //cambie var por let
    console.log(needle);
}
test(); */

//3
//Given:
/* var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); //only okay
}
console.log(brendan); //super cool*/

//Changed:
/* const brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); */

//4
//Given:
/* var food = 'chicken';
console.log(food); //chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); //half-chicken
    var food = 'gone';
} */

//Changed:
/* const food = 'chicken';
console.log(food);
function eat(){
    let food = 'gone';
    food = 'half-chicken';
    console.log(food);
}
eat(); */


//5
//Given:
/* mean(); //error sintaxis
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); */

//Changed:
/* var food;
console.log(food); //undefined
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food); //undefined */


//6 
//Given:
/* console.log(genre); //undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //rock
    var genre = "r&b";
    console.log(genre); //r&b
}
console.log(genre); //disco */

//Changed:
/* var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    var genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); */

//7
//Given
/* dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
 */
//Changed:
/* var dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); */


//8
//Given:
/* console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
} */

//Changed:
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
var aver = makeDojo("Chicago", 65);
console.log(aver['students'])
console.log(makeDojo("New York", 60));
console.log(makeDojo("Berkeley", 0));