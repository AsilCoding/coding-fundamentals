//ASSIGNMENT 1: Tile Teamwork Tactics
/* PSEUDOCODE:
-dice: 1-6
function possibleBonus(a,b){
    >compare a & b:
        >>if a < b: continue
            >>> b - a = c
            >>>compare c to [1,2,3,4,5,6]
                >>>>if c is in array, return true
        >>if a > b: false
}
*/
let dice = [1,2,3,4,5,6]
function possibleBonus(a,b){
    if (a < b){
        let c = b - a
        for(let i=0; i<dice.length; i++){
            if(c == dice[i]){
                return true
            }
        }
    }
    else if (a > b){
        return false
    }
}

console.log(possibleBonus(5,2)) //output: false


//ASSIGNMENT 2: Perimeters with a Catch
//https://dev.to/jobinrjohnson/branchless-programming-does-it-really-matter-20j4
/* PSEUDOCODE:
Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.

function perimeter(letter, num){
    return (letter == s) * (4 * num) + (letter == c) * (6.28 * num);
}
>if letter = s: use 4 * num
>if letter = c: use 6.28 * num
*/
function perimeter(letter, num){
    return (letter == "s") * (4 * num) + (letter == "c") * (6.28 * num);
}

console.log(perimeter("s",7)) //output: 28


//ASSIGNMENT 3: Which Generation Are You?
/* PSEUDOCODE:
-function takes a number x and a character y(m/f)
-if x < 0:
    >return related ancestor (m/f)
    >e.g. -3, "m" = great granfather
-if x > 0:
    >return related descendant (m/f)
    >e.g 2, "f" = granddaughter
-if x == 0:
    >return "me!"

*/

genMaleFemale = [
    {
        gen: -3,
        gender: {
            "m": "great granfather",
            "f": "great grandmother"
        }
    },
    {
        gen: -2,
        gender: {
            "m": "granfather",
            "f": "grandmother"
        }
    },
    {
        gen: -1,
        gender: {
            "m": "father",
            "f": "mother"
        }
    },
    {
        gen: 1,
        gender: {
            "m": "son",
            "f": "daughter"
        }
    },
    {
        gen: 2,
        gender: {
            "m": "grandson",
            "f": "granddaughter"
        }
    },
    {
        gen: 3,
        gender: {
            "m": "great grandson",
            "f": "great granddaughter"
        }
    }
]

function generation(x, y){
    if(x == -3){
        return genMaleFemale[0].gender[y]
    }
    else if(x == -2){
        return genMaleFemale[1].gender[y]
    }
    else if(x == -1){
        return genMaleFemale[2].gender[y]
    }
    else if(x == 1){
        return genMaleFemale[3].gender[y]
    }
    else if(x == 2){
        return genMaleFemale[4].gender[y]
    }
    else if(x == 3){
        return genMaleFemale[5].gender[y]
    }
    else if(x == 0){
        return "me!"
    }
}

console.log(generation(0, "m"))