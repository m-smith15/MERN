const multisetUnion = (arr1, arr2) => {
    let firstOutObject = {};
    let secondOutObject = {};


    // populate first dictionary
    for(number of arr1){
        if(Object.hasOwn(firstOutObject, number)){
            firstOutObject[number]++;
        }
        else{
            firstOutObject[number] = 1;
        }
    }

    // populate second dictionary
    for(number of arr2){
        if(Object.hasOwn(secondOutObject, number)){
            secondOutObject[number]++;
        }
        else{
            secondOutObject[number] = 1;
        }
    }

    // combine 'em
    let output = []
    
    for([key, value] of Object.entries(firstOutObject)){
        if(Object.hasOwn(secondOutObject, key) && secondOutObject[key] > firstOutObject[key]){
            for(var i = 0; i < secondOutObject[key]; i++){
                output.push(parseInt(key));
            }
        }
        else{
            for(var i = 0; i < value; i++){
                output.push(parseInt(key));
            }
        }
    }
    for([key, value] of Object.entries(firstOutObject)){
        if(Object.hasOwn(secondOutObject, key) && secondOutObject[key] > firstOutObject[key]){
            for(var i = 0; i < secondOutObject[key]; i++){
                output.push(parseInt(key));
            }
        }
        else{
            for(var i = 0; i < value; i++){
                output.push(parseInt(key));
            }
        }
    }
    for([key, value] of Object.entries(secondOutObject)){
        if(!output.includes(parseInt(key))){
            for(var i = 0; i < value; i++){
                output.push(parseInt(key));
            }
        }
    }

    output.sort((a,b) => a > b);

    return output;
}

