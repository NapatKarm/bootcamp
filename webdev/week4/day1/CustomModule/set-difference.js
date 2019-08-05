function setDifference(arr1, arr2){
    let arr3 = [];
    let checker = false;
    for(let step = 0; step < arr1.length; step++) {
        for(let check = 0; check < arr2.length; check++) {
            if(arr1[step]===arr2[check]) checker = true; 
        }
        if(checker === false){
            arr3.push(arr1[step])
        }
        checker = false;
    }
    checker = false;
    for(let step = 0; step < arr2.length; step++) {
        for(let check = 0; check < arr1.length; check++) {
            if(arr2[step]===arr1[check]) checker = true; 
        }
        if(checker === false){
            arr3.push(arr2[step])
        }
        checker = false;
    }
    return arr3;
}
module.exports = setDifference;