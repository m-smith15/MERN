const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;


function canStringBecomePalindrome(str) {
    //edge cases
    if (str.length === 0) { return false }
    else if (str.length === 1) { return true }
    let set = new Set();
    let toArr = str.split('');
    // set.add(test[x])
    console.log(set);
    console.log(set.size)
    console.log([...new Set(str)].join(''))
    
    
    let middle = Math.ceil(str.length/2)
    let end = str.length - 1
    if (str.length % 2 !== 0) { //odd # of chars in string

        // let test = str.split('')
        // let testObj = {...test}

        // console.log(testObj)



        // for (let x = 0; x < middle; x++) {
        //     if(test[x] === test[end - x]){
        //         console.log(x)
        //         console.log(test[x])
        //         console.log(test[end - x])
        //         return true
        //     }

            // console.log(str.length)
            // console.log(middle)
        //}
    }
    if (str.length % 2 === 0) { //even # of chars in string

    }
}
// console.log(canStringBecomePalindrome(str1))
// console.log(canStringBecomePalindrome(str2))
// console.log(canStringBecomePalindrome(str3))
// console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
// console.log(canStringBecomePalindrome(str6))


// dda add dad 
// ddaaa dadaa daada daaad 
/*****************************************************************************/


// const nums1 = [1, 4, 3, 6, 9, 15];

// const callback1 = (elem) => {
//     return elem > 5;
// };
// const expected1 = [6, 9, 15];

// const nums2 = [...nums1];
// const callback2 = (elem) => {
//     return elem > 2;
// };
// const expected2 = [4, 3, 6, 9, 15];

// const nums3 = [...nums1];

// const callback3 = (elem) => false;
// const expected3 = [];

// function dropIt(arr, cb) {}

/*****************************************************************************/