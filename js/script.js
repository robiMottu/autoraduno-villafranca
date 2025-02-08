$(document).ready(function() {
    function updateImage() {
        if ($(window).width() <= 767) {
            $('.personal-responsive-img').attr('src', 'img/222logo-white.png');
            $(window).scroll(function() {
                if ($(this).scrollTop() > 3) { // Cambia il valore 100 in base a quanto vuoi che l'utente scrolli
                    $('#main-content').addClass('visible-content');
                    $(".fixed-bg").addClass('dimmed');
                }
                else{
                    $('#main-content').removeClass('visible-content');
                    $('.fixed-bg').removeClass('dimmed');
                }
            });
        } else {
            $('.personal-responsive-img').attr('src', 'img/222logo-white.png');
            $('#main-content').addClass('visible-content');
            $('.fixed-bg').removeClass('dimmed');
        }
    }
    

    updateImage(); // Chiamata iniziale
    $(window).resize(updateImage); // Chiamata al ridimensionamento
    console.log('script.js loaded');
});