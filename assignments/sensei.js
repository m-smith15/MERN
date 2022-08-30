class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`Hello my name is ${this.name}`);
    }
    showStats() {
        console.log(`My name is: ${this.name}`);
        console.log(`My health is: ${this.health}`);
        console.log(`My speed is: ${this.speed}`);
        console.log(`My strength is: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`I drank sake raising my health to ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("I am wise listen to these words")
    }
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

const masterShredder = new Sensei("Master Shredder")
masterShredder.speakWisdom();
masterShredder.showStats();

// Create a Ninja class
// add an attribute: name
// add an attribute: health
// add a attribute: speed - give a default value of 3
// add a attribute: strength - give a default value of 3
// add a method: sayName() - This should log that Ninja's name to the console
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
// add a method: drinkSake() - This should add +10 Health to the Ninja


class Vehicle {
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    drive() {
        this.miles += 10;
        console.log(`${this.miles}`)
    }
}

const car = new Vehicle("ShrimpMotors", "Shrimper", "Shrimp Green")
car.drive();