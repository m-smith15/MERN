// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:
//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/submissions/


// k is the number of weakest rows to return

// 2 checks - # of soldiers in row
// row i < j 

// create a results array, order the rows weakest to strongest, fill results until k - 1

let mat =
    [[1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]]
let k = 2
// Output: [0, 2]

// console.log(mat.length)

let mat2 =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]]
let k2 = 3
// Output: [2, 0, 3]

function kWeakestRows(mat, k) {
    let result = [];
    let addArry = [];


    for (let x = 0; x < mat.length; x++) {
        // console.log("x is: " + x)
        let tempTotal = 0;
        for (let i = 0; i < mat[x].length; i++) {
            tempTotal += mat[x][i]
            // console.log("i is: " + i)
        }
        addArry.push(tempTotal)
    }
    console.log(addArry)

    let power = 0;
    while(result.length < k){

        for (let idx = 0;idx < addArry.length; idx++) {
            if (addArry[idx] == power) {
                result.push(idx)
                if(result.length == k){
                    break;
                }
            }
            else {
            }
        }
        power++;
        console.log(result.length)
    }
    return result;
}


console.log(kWeakestRows(mat, k));
console.log(kWeakestRows(mat2, k2));

// closing thoughts - this for sure isn't optimized. I for sure brute force'd a bit here and having 2 nested for loops isn't doing big O notation any favors
// todo - read up on some more optimal solutions from the discussion board:

// MAP!! D'oh
//https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/discuss/2615437/Javascript-97-Faster-Fully-commented-with-explaination
// this was a great solution. Only 1 nested for loop and letting .sort and .slice worry about some of the things I struggled with in this algo