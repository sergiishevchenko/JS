'use strict';

var money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD?", '');


var appData = {
    budget: money,
    datatime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++){
    let item = prompt("Введите обязательную статью расходов в этом месяце?", ''),
        price = prompt("Во сколько обойдется?", '');
    if ( (typeof(item)) === 'string' && item != null && price != null
        && item != '' && price != '' && item.length < 50 ) {
        console.log("done");    
        appData.expenses[item]=price;
    } else {
        console.log("Smth wrong! Check your input!");
        i--;
    }
}

// FIRST LOOP

//let i = 0;
// do {
//     let item = prompt("Введите обязательную статью расходов в этом месяце?"),
//         price = prompt("Во сколько обойдется?"),
//     if ( (typeof(item)) === 'string' && item != null && price != null
//     && item != '' && price != '' && item.length < 50 ) {
//         console.log("done");    
//         appData.expenses[item]=price;
//     } else {
//         console.log("Smth wrong! Check your input!");
//         i--;  
//     }
//     i++;
// }
// while (i < 2);


// SECOND LOOP

// let i = 0;
// while (i < 2) {
//     let item = prompt("Введите обязательную статью расходов в этом месяце?"),
//         price = prompt("Во сколько обойдется?");
//     if ( (typeof(item)) === 'string' && item != null && price != null
//     && item != '' && price != '' && item.length < 50 ) {
//         console.log("done");    
//         appData.expenses[item]=price;
//     } else {
//         console.log("Smth wrong! Check your input!");
//         i--;  
//     }
//     i++;
// }

appData.moneyPerDay = appData.budget / 30;

// var budjetday = money /30;
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Low income!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Normal income!");
} else if (appData.moneyPerDay > 2000){
    console.log("High income!");
} else {
    console.log("Error!");
}