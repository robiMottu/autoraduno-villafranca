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

    /* Carousel */

    let slider = $(".slide-track");
    let imgPath = "img/loghi_sponsor_new/";
    let ext = ".jpg";
    let imgList = ["aeffe", "agraria", "alimenta", "barPalazzetto", "barRoma", "beilis", 
        "bertea", "bonansone", "bottano", "busso", "duvinaFormaggi", "effepiu", "evoedile", 
        "fulvioCaseificio", "gallo", "ilPruche", "kromo", "laLea", "muli", "neroDelRe", "officina626", 
        "officinaPiccato", "panetteriaRolle", "ricotto", "rovetto", "saiel", "salfer", "scalerandi", 
        "vedCostruzioniEdili", "vera", "villafrancaFiocchi"];
    
    for (let i = 0; i < imgList.length; i++) {
        let elem = `<div class="slide"><img height="200px" width="250px" src="${imgPath}${imgList[i]}${ext}" alt="${imgList[i]}" /></div>`;
        $(slider).append(elem);
    }
    for (let i = 0; i < imgList.length; i++) {
        let elem = `<div class="slide"><img height="200px" width="250px" src="${imgPath}${imgList[i]}${ext}" alt="${imgList[i]}" /></div>`;
        $(slider).append(elem);
    }

    updateImage(); // Chiamata iniziale
    $(window).resize(updateImage); // Chiamata al ridimensionamento
    console.log('script.js loaded');
});