const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

function compareVersionNumbers(v1, v2) {
    let test = v1.split('.')
    let test2 = v2.split('.')
    // console.log(test)
    // console.log(test2)

    // let comp1 = parseFloat(v1)
    // console.log(comp1);
    // let comp2 = parseFloat(v2);
    // console.log(comp2);

    if(test > test2){
        return 1
    } else if(test < test2){
        return -1
    } else{
        return 0;
    }

}

// console.log(compareVersionNumbers(test1V1,test1V2))
// console.log(compareVersionNumbers(test2V1,test2V2))
// console.log(compareVersionNumbers(test3V1,test3V2))
// console.log(compareVersionNumbers(test4V1,test4V2))
console.log(compareVersionNumbers(test5V1,test5V2))
// console.log(compareVersionNumbers(test6V1,test6V2))


/*****************************************************************************/