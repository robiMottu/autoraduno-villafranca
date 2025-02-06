$(document).ready(function() {
    function updateImage() {
        if ($(window).width() <= 767) {
            //$('.personal-responsive-img').attr('src', 'img/222logo-white.png');
            $(window).scroll(function() {
                if ($(this).scrollTop() > 3) { // Cambia il valore 100 in base a quanto vuoi che l'utente scrolli
                    $('#main-content').addClass('visible-content');
                    $(".hero-header").addClass('dimmed');
                }
                else{
                    $('#main-content').removeClass('visible-content');
                    $('.hero-header').removeClass('dimmed');
                }
            });
        } else {
            //$('.personal-responsive-img').attr('src', 'img/222logo-white.png');
            $('#main-content').addClass('visible-content');
            $('.hero-header').removeClass('dimmed');
        }
    }

    function updateBackgroundPosition() {
        if ($(window).width() <= 767) {
            var scrollTop = $(window).scrollTop();
            $('.hero-header').css('background-position', '50% ' + (scrollTop * 0.5) + 'px');
        }
    }
    
    updateImage(); // Chiamata iniziale
    updateBackgroundPosition();
    $(window).scroll(updateBackgroundPosition);
    $(window).resize(updateImage); // Chiamata al ridimensionamento
    console.log('script.js loaded');
});