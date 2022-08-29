// Ninja Practice Assignment
class Ninja {
    constructor(name, health, speed, strength){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log("Hello my name is " + this.name);
    }

    showStats() {
        console.log("My name is: " + this.name)
        console.log("My health is: " + this.health)
        console.log("My speed is: " + this.speed)
        console.log("My strength is: " + this.strength)
    }

    // class name extends parent method {
    //     constructor ( only ened what you want to change) {

    //     }
    // }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

// Create a Ninja class
// add an attribute: name
// add an attribute: health
// add a attribute: speed - give a default value of 3
// add a attribute: strength - give a default value of 3
// add a method: sayName() - This should log that Ninja's name to the console
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
// add a method: drinkSake() - This should add +10 Health to the Ninja