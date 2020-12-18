$(document).ready(function() {

    var menu = $('header .menu-items');

    $('.hamburger-menu').click(function() {
        menu.slideToggle();
        $('.hamburger-menu i').toggleClass('rotate-90-anti');
    })

    if ($('.hamburger-menu').is(":visible")) {

        $(document).on('click', function(event){

            var trigger = $(".hamburger-menu");

            if(trigger !== event.target && !trigger.has(event.target).length){
                menu.slideUp();
                $('.hamburger-menu i').removeClass('rotate-90-anti');
            }        

        });

    }

});