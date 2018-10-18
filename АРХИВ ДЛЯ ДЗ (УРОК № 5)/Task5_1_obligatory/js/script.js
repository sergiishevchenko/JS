//first
let li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт'),
    menu = document.querySelector('.menu');

li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';

//second
document.body.style.background = 'url(img/apple_true.jpg)';

// third
document.getElementById("title").innerHTML = "Мы продаем только подлинную технику Apple";

// fourth
let adv = document.getElementsByClassName('adv');

adv[0].parentNode.removeChild(adv[0]);

//fifth
let question = prompt('Что Вы думаете по поводу продукции компании Apple?', '');

document.getElementById("prompt").innerHTML = question;

// order
let sec = document.getElementsByClassName('menu-item');
sec[1].parentNode.removeChild(sec[1]);

let f = document.querySelector('.menu'),
    third = document.createElement('li');

third.classList.add('menu-item')
third.innerHTML = 'Третий пункт';
f.insertBefore(third, sec[2]);





// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.wrapper .heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');
  
// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'blue';
// });

// let div = document.createElement('div'),
//     text = document.createTextNode('Тут был я');

// div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello World!</h1>';
// div.textContent = 'Hello World!';

// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);

// document.body.replaceChild(btn[1], circle[1]);

// console.log(div);


// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);
// console.log(oneHeart);
