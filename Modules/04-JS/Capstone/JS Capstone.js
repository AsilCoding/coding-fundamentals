//PSUDOCODE
/*
-loop the given string
  >compare the charCode of 1st and 2nd letter, then 2nd to 3rd, etc //https://www.w3schools.com/jsref/jsref_charcodeat.asp
    >if got difference of 1, no letter missing
      >return undefined
    >if difference is more than 1, there is a letter missing
      >return missing letter
//https://www.commfront.com/pages/ascii-chart
*/

function missingLetter(str) {
  for(let i=0; i<str.length; i++){
    let difference = str.charCodeAt(i+1) - str.charCodeAt(i)
    if(difference > 1){
      const letterMissing = str.charCodeAt(i) + 1
      console.log(String.fromCharCode(letterMissing)) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    }
  }
  return undefined
}

missingLetter("abce");
//missingLetter("abce") should return the string d.
