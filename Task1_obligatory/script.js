'use strict';

var money = +prompt ("Ваш бюджет на месяц?"),
    time = prompt ("Введите дату в формате YYYY-MM-DD?");


console.log(money);
console.log(time);

var whatyoubuy1 = prompt("Введите обязательную статью расходов в этом месяце?"),
    priceofthis1 = prompt("Во сколько обойдется?");

var whatyoubuy2 = prompt("Введите обязательную статью расходов в этом месяце?"),
    priceofthis2 = prompt("Во сколько обойдется?");

console.log(whatyoubuy1);
console.log(priceofthis1);
console.log(whatyoubuy2);
console.log(priceofthis2);

var appData = {
    budget: money,
    datatime: time,
    expenses: {},
    optionalExpenses: "",
    income: "",
    savings: false
};

appData.expenses[whatyoubuy1] = priceofthis1;
appData.expenses[whatyoubuy2] = priceofthis2;

appData.moneyPerDay = appData.budget / 30;

// var budjetday = money /30;
alert ("Ежедневный бюджет: " + appData.moneyPerDay);











// for (let i = 0; i < 2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце?"),
//         b = prompt("Во сколько обойдется?");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");    
//         appData.expenses[a]=b;
//     } else {
//         console.log("Smth wrong! Check your input!")
//     }
// };

// FIRST LOOP

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце?"),
//         b = prompt("Во сколько обойдется?");
//         switch (a, b) {
//             case (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//             && a != '' && b != '' && a.length < 50:
//                 console.log("done");
//                 break;
//             default:
//                 console.log("Be carefull! Once again!");
//                 break;
//         }
// }

// SECOND LOOP

// let a = prompt("Введите обязательную статью расходов в этом месяце?"),
//     b = prompt("Во сколько обойдется?"),
//     i = 0;
// while (i < 2) {
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50 ) {
//         console.log("done");    
//         appData.expenses[a]=b;
//     } else {
//         console.log("Smth wrong! Check your input!");
//     }
//     i++;
// }



// if (appData.moneyPerDay < 100){
//     console.log("Low income!");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Normal income!");
// } else if (appData.moneyPerDay > 2000){
//     console.log("High income!");
// } else {
//     console.log("Error!");
// }




















// let persone = {
//     name : "John",
//     age : 25,
//     isMarried: false
// };

// console.log(persone.name);
// console.log(persone["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[2]);

//alert ("Hello World!");

// let answer = confirm ("Are you here?");

// console.log(answer);

// let answer = +prompt ("Есть ли вам 18?", "Да");

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + " - object");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);
// console.log(5%2);
// console.log("2" == 2);

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);



/*var leftBorderWidth = 1;
{
    let second = 2;
}
const pi = 3.14;



console.log(second);*/