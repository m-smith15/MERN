//Selection sort

//iterate through list, finding min value - move it to the beginning of list


selectionSort = (arr) => {
    let start = 0;
    let temp = 0;
    while(start < arr.length) {
        let minPosition = start;
        //get the min value of the array
        for(let x = start; x < arr.length; x++){
            if(arr[x] < arr[minPosition]){
                minPosition = x;
                console.log(minPosition)
            }
            //console.log("for loop ended" + minPosition)
        }
    // console.log(minPosition + " min position")
    //check if start = minPosition, no need to swap if so
        if(start != minPosition){
            temp = arr[start];
            arr[start] = arr[minPosition];
            arr[minPosition] = temp;
        }
    start++;
    }
    return arr;
}
arrayExample = [5,4,3,2,1]
console.log(selectionSort(arrayExample))