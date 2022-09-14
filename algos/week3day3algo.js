const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(s) {

    const testSplit = s.split(/(?<=[0-9])(?=[a-z])/) // this cuts the string up /w regex. slices after a number
    console.log(testSplit)

    const firstSplit = [];
    const whatisthis = [];
    // = testSplit.split(/[a-z]/).pop()
    for(let x = 0; x < testSplit.length; x++){
        let shrimp2 = testSplit[x].split().push(whatisthis); //not working - trying to pull the first character out of each entry in array
        let shrimp = testSplit[x].split(/[a-z]/).pop(); //this removes the first character in each array - leaving only the values to be added!
        firstSplit.push(shrimp)
    }
    console.log(whatisthis)
    console.log(firstSplit)

    //SO CLOSE! Come bak to this and finish out this idea

}
console.log(rehash(str1));

// function rehash(s) {
//     // let strArr = s.split("")//string to array
//     const strArr = s.split(/(?<=[0-9])(?=[a-z])/)
//     // console.log(testSplit)
//     // console.log(strArr)
//     let collection = {}
//     for(let i = 0; i < strArr.length; i++){
        
//         if(isNaN(strArr[i])){
            
//             let j = i + 1
//             let num = ""
//             while(!isNaN(strArr[j])){
//                 num+=strArr[j]
//                 j++
//             }
//             console.log(strArr[i])
//             console.log(num)
//             console.log(collection)
//             if( !collection[strArr[i]]) {
//                 collection[strArr[i]] = parseInt(num)
//             } else if(collection[strArr[i]]){
//                 collection[strArr[i]] = collection[strArr[i]] + parseInt(num)
//             }
//             i = j
//         }
//     }
//     return collection
// }

