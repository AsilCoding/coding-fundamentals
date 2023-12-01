/*PSEUDOCODE:
>date2 - date1 = days/miliseconds
>miliseconds formula = 1000 * 3600 * 24
>get difference of days = (days/miliseconds) / miliseconds
*/

function getDays(date1, date2) {
    let diffTime = date2.getTime() - date1.getTime();

    let diffDays = diffTime / (1000 * 3600 * 24);

    return diffDays;
}

console.log(getDays(new Date("December 1, 2018"),
new Date("December 1, 2019")
)
)