/* Ordered Intersection */

orderedSort = (arr1, arr2) => {
    //original

    let shrimp = [];
    // for(let x = 0; x < arr1.length; x++) {
        //     for(let y = 0; y < arr2.length; y++){
            //         if(arr1[x] == arr2[y] && !shirmp.includes(arr2[y]) ){
                //             shirmp.push(arr2[y])
                //         }
                //     }
                // }
                // return shirmp;
                

                
    //great idea using .filter() - couldn't get it working in time
    let jumboshrimp = [];
    function duplicate(num){
        if(!shrimp.includes(num)){
            shrimp.push(num);
        } 
        else if(shrimp.includes(num) && !jumboshrimp.includes(num)) {
            jumboshrimp.push(num);
        }
    }
    array3 = arr1.concat(arr2);
    arr1.filter(duplicate);
    //arr2.filter(duplicate)
    //array3.filter(duplicate)
    return jumboshrimp;
}

array1 = [0,1,2,2,2,7]
array2 = [2, 2, 6, 6, 7]
console.log(orderedSort(array1, array2));
// expect [2,7]

// array1 = []
// array2 = [2,2, 6, 6]
// console.log(orderedSort(array1, array2));

// array1 = [0]
// array2 = [0]
// console.log(orderedSort(array1, array2));
