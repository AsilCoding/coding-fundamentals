let total = 0
function sum(numbersArray){  
    for(i=0; i<numbersArray.length; i++){
        total += numbersArray[i];
    }
    return total;
}

// Test cases
// console.log(sum([1, 2, 3, 4])) //output: 10
// console.log(sum([-3, 5, 19, -6])) //output: 15
console.log(sum([1,1,2,3,5,8])) //output: 20