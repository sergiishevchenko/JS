let age = document.getElementById('age');

function showUser(surname, name) {
    this.surname = surname;
    this.name = name;
    alert(`Пользователь ${surname} ${name} его возраст ${this.value}`);
}

console.log(showUser.apply(age, ['Shevchenko','Sergii']));