var maximumWealth = function (accounts) {
    let max = 0;
    for (let x = 0; x < accounts.length; x++) {
        let Temptotal = 0;
        for (let j = 0; j < accounts[x].length; j++) {
            Temptotal += accounts[x][j]
        }
        if (Temptotal > max) {
            max = Temptotal;
        }
    }
    return max;
};

// const accounts = [[1,2,3],[3,2,1]]
// console.log(maximumWealth(accounts))
// const accounts2 = [[1,5],[7,3],[3,5]]
// console.log(maximumWealth(accounts2))
// const accounts3 = [[2,8,7],[7,1,3],[1,9,5]]
// console.log(maximumWealth(accounts3))


//can I do something recursively here? would be difficult without passing a steps counter as an argument
var numberOfSteps = function (num) {
    let steps = 0;
    while (num >= 0) {
        if (num == 0) {
            //console.log("returning steps")
            return steps;
        }
        else if (num % 2 == 0) { // even
            steps++;
            num = num/2
            //console.log("num / 2: " + num)
            // numberOfSteps(num/2, steps);
        }
        else{
            num--;
            steps++;
            //console.log("num - 1: " + num)
        }
    }
};

let input = 14
console.log(numberOfSteps(input));
let input2 = 8
console.log(numberOfSteps(input2));
let input3 = 123
console.log(numberOfSteps(input3));