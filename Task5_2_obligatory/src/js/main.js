// first
let start = document.getElementById('start');

// second
let budget_value = document.getElementsByClassName('budget-value')[0],
    daybudget_value = document.getElementsByClassName('daybudget-value')[0],
    level_value = document.getElementsByClassName('level-value')[0],
    expenses_value = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses_value = document.getElementsByClassName('optionalexpenses-value')[0],
    income_value = document.getElementsByClassName('income-value')[0],
    monthsavings_value = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings_value = document.getElementsByClassName('yearsavings-value')[0];

// third
let expenses_item = document.getElementsByClassName('expenses-item')[1];

// fourth
let tags = document.getElementsByTagName('button'),
    expenses_item_btn = document.getElementsByClassName('expenses-item-btn')[0],
    optionalexpenses_btn = document.getElementsByClassName('optionalexpenses-btn')[0],
    count_budget_btn = document.getElementsByClassName('count-budget-btn')[0];

// fifth
for (let i = 0; i < 3; i++){
    let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item')[i];
}

// sixth
let choose_income = document.querySelector('.choose-income'),
    checksavings = document.querySelector('.checksavings'),
    choose_sum = document.querySelector('.choose-sum'),
    choose_percent = document.querySelector('.choose-percent'),
    year_value = document.querySelector('.year-value'),
    month_value = document.querySelector('.month-value'),
    day_value = document.querySelector('.day-value');
    console.log(choose_sum);