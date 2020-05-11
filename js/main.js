$(document).ready(function(){
    $('.clients-slider').slick({
        arrows:false,
        dots:true,
        fade:true
    });
    $('.burger').on('click', function() {
        $('.main-header__nav').toggleClass('showMenu');
    });
    $('.burger').on('click', function() {
        $('.burger').toggleClass('burger-close');
    });
});