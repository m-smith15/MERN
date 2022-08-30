class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        console.log(`${this.name} with power ${this.power} attacks ${target.name} with res of ${target.res}! `);
        target.res -= this.power;
    }

    showStats() {
        console.log(`Card name is: ${this.name}`);
        console.log(`Card cost is: ${this.cost}`);
        console.log(`Card power is: ${this.power}`);
        console.log(`Card res is: ${this.res}`);
    }
}

class Effect extends Card {
    constructor(name, cost, magnitude, stat){
        super(name, cost);
        this.magnitude = magnitude;
        if(stat == "resilience"){
            this.stat = "resilience"
        }
        else {
            this.stat = "power"
        }
    }

    playEffect(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                console.log(`${this.name} played on ${target.name} res ${target.res} was impacted by ${this.magnitude}`)
                target.res += this.magnitude;
            } else if(this.stat == "power") {
                target.power += this.magnitude;
                console.log(`${this.name} played on ${target.power} power ${target.power} was impacted by ${this.magnitude}`)
            }
        }
        else{
            throw new Error("Target must be a Unit!")
        }
    }
}

const redBelt = new Unit("Red Belt Ninja", 3,3,4);
redBelt.showStats();
console.log("----------1----------")

const hardAlgo = new Effect("Hard Algorithm", 2, +3, "resilience")
hardAlgo.playEffect(redBelt);
redBelt.showStats();
console.log("----------2----------")

const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4)
blackBelt.showStats();
console.log("----------3----------")

const unhandledPromiseReject = new Effect("Unhandled Promise Rejection", 1, -2, "resilience")
unhandledPromiseReject.playEffect(redBelt);
redBelt.showStats();
console.log("----------4----------")

const pairProgramming = new Effect("Pair Programming", 3, 2, "power");
pairProgramming.playEffect(redBelt)
redBelt.showStats();
console.log("----------5----------")

redBelt.attack(blackBelt);





// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"