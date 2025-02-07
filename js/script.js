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
    
    updateImage(); // Chiamata iniziale
    //$(window).resize(updateImage); // Chiamata al ridimensionamento
    $(window).on('resize', updateImage)
    console.log('script.js loaded');
});