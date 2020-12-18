$(document).ready(function() {

    $('.modal-close').click(function() {
        $(this).closest('.email-container').addClass('modal-change');
    })

    $('.modal-expand').click(function() {
        $(this).closest('.email-container').removeClass('modal-change');
    })


});