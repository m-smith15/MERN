const S1 = "ad#c";
const T1 = "ab#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "b#c#";
const T2 = "g#g#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    Sarray = S.split('');
    Tarray = T.split('');
    let x = 0;
    while (x < Sarray.length) {
        // console.log("x is: " + x)
        if (Sarray[x] == "#") {
            let temp = x - 1;
            let index = 2;
            if (temp < 0) { temp = 0, index = 1 }
            Sarray.splice(temp, index);
            // console.log("String spliced, is now: " + Sarray)
            x--;
            if (x < 0) { x = 0 }
            // console.log("after splice x is now: " + x)
        } else {
            x++;

        }
    }
    let i = 0;
    while (i < Tarray.length) {
        // console.log("i is: " + i)
            if (Tarray[i] == "#") {
                let temp = i - 1;
                let index = 2;
                if (temp < 0) { temp = 0, index = 1 }
                Tarray.splice(temp, index);
                // console.log("String spliced, is now: " + Tarray)
                i--;
                if (i < 0) { i = 0 }
                // console.log("after splice i is now: " + i)
            } else {
                i++;

            }
        }

    Sarray = Sarray.join('');
    Tarray = Tarray.join('');
    console.log(Sarray)
    console.log(Tarray)

    if (Sarray == Tarray) {
        return true
    } else {
        return false;
    }
}
// console.log(backspaceStringCompare(S1, T1));
// console.log(backspaceStringCompare(S2, T2));
// console.log(backspaceStringCompare(S3, T3));
// console.log(backspaceStringCompare(S4, T4));

/*****************************************************************************/
const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
        name: "Baby Yoda",
        category: "cute",
        },
        {
        name: "Shibe",
        category: "Cute",
        },
    ],
    food: [
        {
        name: "Cricket Protein",
        category: "food",
        },
        {
        name: "Wasp Crackers",
        category: "Food",
        },
    ],
    "cradle of civilization": [
        {
        name: "Ancient India",
        category: "Cradle of Civilization",
        },
        {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */

// didn't finish before was called back to room!
function groupObjects(items) {
    const ht = new Object();

    for ( var key in items){
        if(items.hasOwnProperty(key)){
            console.log("key is " + key + " value is " + items[key])
        }
    }
}

console.log(groupObjects(objects));

/*****************************************************************************/