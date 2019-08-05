function setIntersection(arr1, arr2){
    let arr3 =[]
    for(let step = 0; step < arr1.length; step++) {
        for(let check = 0; check < arr2.length; check++) {
            if(arr1[step]===arr2[check]){
                arr3.push(arr1[step]);
            }    
        }
    }
    return arr3;
}

module.exports = setIntersection;