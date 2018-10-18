'use strict';

// first part
let str = "урок-3-был слишком легким";
let res = str.charAt(0).toUpperCase() + str.substr(1)
console.log(res);
let res1 = res.split('-').join(' ');
console.log(res1);
let res2 = res1.split(' ').slice(0, 4).join(' ');
console.log(res2);
let res3 = res1.replace("им", "o");
console.log(res3);

// second part
let arr = [20, 33, 1, "Человек", 2, 3];
let summ = 0;
for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) != "string"){
        summ = summ + Math.pow(arr[i], 3);
    }
}
console.log(Math.sqrt(summ));

// third part
let input = prompt("Введите чё-нить!");
function myfunction (input) {
    input = input.trim();
    console.log(input)
    if (typeof(input) != 'string') {
        console.log("Вы ввели не строку!");
    } else if (input.length > 50) {
        console.log(input.slice(0, 50) + "...");
    }
}
myfunction(input);