//JS Assignment 1
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


//JS Assignment 2
//input always dd/mm/yy
function calculateAge(birthday){
    var splitdate = birthday.split("/")
    
    // Date object, getting current date
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
  
    //calculate difference
    var dayDifference = currentDay - splitdate[0]
    var monthDifference = currentMonth - splitdate[1]
    var yearDifference = currentYear - splitdate[2]
  
    //compare difference to check if day has passed
    if(monthDifference <0 || (monthDifference === 0 && dayDifference <0)){
      yearDifference--
    }
    console.log(`You are ${yearDifference} years old.`)
  }
calculateAge("21/7/2002")


//JS Assignment 3
function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;

    for (var i = num - 1; i >= 1; i--) {
      num = num * i; // or num *= i;
    }
    return num;
}
console.log(factorialize(7));


//JS Assignment 4
//tetrahedral number explanation: https://www.mathsisfun.com/tetrahedral-number.html
//math formula: https://www.quora.com/What-is-the-formula-to-find-the-summation-of-tetrahedron-numbers-Such-as-1-4-10-20
function tetra(n){  
    return (n * (n+1)* (n+2))/6
}

console.log(tetra(10))