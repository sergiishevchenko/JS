'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    datatime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses () {
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
}
chooseExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100){
        console.log("Low income!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Normal income!");
    } else if (appData.moneyPerDay > 2000){
        console.log("High income!");
    } else {
        console.log("Error!");
    }
}
detectLevel();


function chooseOptExpenses () {
    for (let i = 0; i < 3; i++) {
        let question = prompt("Статья необязательных расходов?", '');
        if (typeof(question) === 'string' && question != null
        && question != '' && question.length < 50 ) {
            console.log("done");    
            appData.expenses[i]=question;
        } else {
            console.log("Smth wrong! Check your input!");
            i--;
        }
    }
}
chooseOptExpenses();


// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     console.log();
// }

// showFirstMessage("Hello, World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// let calc = (a, b) => {a + b};

// console.log(calc(3, 4));
// console.log(calc(8, 4));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = '12.2px';
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));
