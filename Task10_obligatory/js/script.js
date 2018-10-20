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
});


