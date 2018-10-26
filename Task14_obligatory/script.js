$(window).on('load', function() {
    $('.main_btn, .main_btna, .main_nav nav>ul li a:eq(1)').on('click', function() {
        $('.modal').stop(true, true).slideToggle(2000);
        $('.overlay').animate(
            {
                opacity: 'show'
            }
        ), 10000
    });
    $('.close').on('click', function() {
        $('.modal').stop(true, true).slideToggle(2000);
        $('.overlay').animate(
            {
                opacity: 'hide'
            }
        ), 10000
    });
});




// $(document).ready(function() {
//     $('.list-item:first').hover(function() {
//         $(this).toggleClass('active');
//     });

//     $('.list-item:eq(2)').on('click', function() {
//         $('.image:even').fadeToggle('slow');
//     });

//     $('.list-item:eq(4)').on('click', function() {
//         $('.image:odd').animate(
//             {
//                 opacity: 'toggle',
//                 height: 'toggle'
//             }, 3000
//         );
//     });
// });

// document.querySelectorAll('.list-item').forEach();
// .classList
// .addEventListener
// $.ajax - fetch
// animations