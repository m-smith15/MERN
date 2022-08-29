// // Example of hoisting!
// let example = "I'm the example!";    
// console.log(example);

// 1
console.log(hello);
var hello = 'world';
// hello hoisted, but the value is below so not read
//prediction: undefined!
console.log("-------- 2 -------")

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//prediction: although needle is defined globally, it is re-set locally. log will be magnet
console.log("-------- 3 -------")


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//prediction: console will only log "super cool" - print() is never called! tricky tricky
console.log("-------- 4 -------")


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//prediction: console will show chicken, followed by half chicken. Var is redefined but since defined globally can access and reassign
console.log("-------- 5 -------")

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//prediction: console will output undefined. Var is hoisted but not defined when called. followed by rock and r&b from the rewind() function call. Finally it will log "disco" from the last call
console.log("-------- 6 -------")

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//prediction: conosle will show san jose, then seattle, then burbank, followed by san jose again
console.log("-------- 7 -------")

console.log(makeDojo("Chicago", 65));
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
}
//prediction: console will return {name: "Chicago" students: 65 hiring: true} for first call; {name: "Berkeley", sudents: 0, hiring:false} for second //No! Errors on 2nd because its trying to overwrite a const declaration! Read the whole thing, self!