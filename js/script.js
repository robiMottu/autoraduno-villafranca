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
    let carouselInterval;

    function advanceCarousel() {
        let $activeSlide = $("[data-carousel]").find("[data-active]");
        let $slides = $activeSlide.closest("[data-slides]");
        let newIndex = $activeSlide.index() + 1;
        let totalSlides = $slides.children().length;

        if (newIndex >= totalSlides) newIndex = 0;

        $slides.children().eq(newIndex).attr("data-active", "true");
        $activeSlide.removeAttr("data-active");
    }

    function startCarousel() {
        carouselInterval = setInterval(advanceCarousel, 6500);
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    $("[data-carousel-button]").on("click", function () {
        stopCarousel();
        let offset = $(this).data("carousel-button") === "next" ? 1 : -1;
        let $slides = $(this).closest("[data-carousel]").find("[data-slides]");
        let $activeSlide = $slides.find("[data-active]");

        let newIndex = $activeSlide.index() + offset;
        let totalSlides = $slides.children().length;

        if (newIndex < 0) newIndex = totalSlides - 1;
        if (newIndex >= totalSlides) newIndex = 0;

        $slides.children().eq(newIndex).attr("data-active", "true");
        $activeSlide.removeAttr("data-active");

        //setTimeout(startCarousel, 5000); // Riprendi l'intervallo dopo 5 secondi
        startCarousel();
    });


    let startX = 0;
    let endX = 0;

    function nextSlide() {
        $("[data-carousel-button='next']").trigger("click");
    }

    function prevSlide() {
        $("[data-carousel-button='prev']").trigger("click");
    }

    $("[data-carousel]").on("touchstart", function (event) {
        startX = event.originalEvent.touches[0].clientX;
    });

    $("[data-carousel]").on("touchend", function (event) {
        endX = event.originalEvent.changedTouches[0].clientX;
        let diff = startX - endX;

        if (diff > 50) {
            nextSlide(); // Swipe da destra a sinistra → avanti
        } else if (diff < -50) {
            prevSlide(); // Swipe da sinistra a destra → indietro
        }
    });


    startCarousel(); // Avvia il carousel automaticamente

    let ulCarousel = $("#carousel-list");
    let imgPath = "img/loghi_sponsor_new/";
    let ext = ".jpg";
    let imgList = ["aeffe", "agraria", "alimenta", "barPalazzetto", "barRoma", "beilis", 
        "bertea", "bonansone", "bottano", "busso", "duvinaFormaggi", "effepiu", "evoedile", 
        "fulvioCaseificio", "gallo", "ilPruche", "kromo", "laLea", "muli", "neroDelRe", "officina626", 
        "officinaPiccato", "panetteriaRolle", "ricotto", "rovetto", "saiel", "salfer", "scalerandi", 
        "vedCostruzioniEdili", "vera", "villafrancaFiocchi"];

    let listItemActive = `
            <li class="slide" data-active>
                <img src="${imgPath}${imgList[0]}${ext}" alt="Logo Sponsor #1">
            </li>
        `;
        ulCarousel.append(listItemActive);
    for (let i = 1; i < imgList.length; i++) {
        let listItem = `
            <li class="slide">
                <img src="${imgPath}${imgList[i]}${ext}" alt="Logo Sponsor #${i + 1}" class="img-fluid">
            </li>
        `;
        ulCarousel.append(listItem);
    }
    

    updateImage(); // Chiamata iniziale
    $(window).resize(updateImage); // Chiamata al ridimensionamento
    console.log('script.js loaded');
});