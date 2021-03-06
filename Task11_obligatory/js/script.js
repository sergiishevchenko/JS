window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer

    let deadline = '2018-11-27 20:47:00';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`; 
        }
    
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

    // Scroll

    let nav = document.getElementsByTagName('UL')[0]; // обращаемся к элементу с тэгом ul
    nav.addEventListener('click', function(event) {
        if (event.target.tagName == 'A') {
            event.preventDefault(); // отменяем действие по умолчанию
            let ev = event.target.getAttribute('href'); // ищу аттрибут
            ev = ev.slice(1); // обрезаем решётку
            let link = document.getElementById(ev); // ищу элемент с айди ev
            let coordinates = link.getBoundingClientRect().top,
                i = 1;
            function scroll() {
                let req = requestAnimationFrame(scroll); // создаём запрос
                i++; // инкремент
                window.scrollBy(0, coordinates/30); // задаём шаг
                if (i == 30) {
                    cancelAnimationFrame(req); // заканчиваем анимацию при i = 30 
                }
            }
            scroll();
        }
    });

    // Modal - Узнать больше (акция)

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Modal - Узнать больше (табы)
    
    let btn = document.getElementsByClassName('description-btn'),
        over = document.querySelector('.overlay'),
        cross = document.querySelector('.popup-close');

    for (let i = 0; i < 4; i++) {
        
        btn[i].addEventListener('click', function() {
            over.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        cross.addEventListener('click', function() {
            over.style.display = 'none';
            btn[i].classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    // Form foк modal window

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
            console.log(typeof(value));
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4 ) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++){
            input[i].value = '';
        }
    });

    // Form for contacts

    let messageContact = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let formContact = document.querySelector('.contact-form'),
        inputContact = formContact.getElementsByTagName('input'),
        statusMessageContact = document.createElement('div');

        statusMessageContact.classList.add('status');

    formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        formContact.appendChild(statusMessageContact);

        let requestContact = new XMLHttpRequest();
        requestContact.open('POST', 'server.php');
        requestContact.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formDataContact = new FormData(formContact);

        for (let i = 0; i < inputContact.length; i++) {
            formDataContact.append(inputContact[i].getAttribute('name'), inputContact[i].value);
        }

        let objContact = {};
        formDataContact.forEach(function(value, key) {
            objContact[key] = value;
        });

        let jsonContact = JSON.stringify(objContact);

        requestContact.send(jsonContact);

        requestContact.addEventListener('readystatechange', function() {
            if (requestContact.readyState < 4 ) {
                statusMessageContact.innerHTML = messageContact.loading;
            } else if (requestContact.readyState === 4 && requestContact.status == 200) {
                statusMessageContact.innerHTML = messageContact.success;
            } else {
                statusMessageContact.innerHTML = messageContact.failure;
            }
        });

        for (let i = 0; i < inputContact.length; i++){
            inputContact[i].value = '';
        }
    });

    
});

function cislo(){
    if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)
    event.preventDefault();
}
