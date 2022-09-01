//Predict the output, if it will error state the error!

console.log("----------- 1 -----------")
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output: console will log 'Tesla' and then 'Mercedes'
console.log(randomCar)
console.log(otherRandomCar)

console.log("----------- 2 -----------")
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output: console will log 'Elon' twice || Name is not defined, will error!
//console.log(name);
console.log(otherName);

console.log("----------- 3 -----------")
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output: console will output 12345, followed by an error - hashedPassword is not defined in person const
console.log(password);
console.log(hashedPassword);

console.log("----------- 4 -----------")
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output console will output false, followed by true, 2 is at position 1 and 8 of the array
console.log(first == second);
console.log(first == third);

console.log("----------- 5 -----------")
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output: console will log "value", followed by [1, 5, 1, 8, 3, 3], followed by 1, followed by 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
