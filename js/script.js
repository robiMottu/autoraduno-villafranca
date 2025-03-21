$(document).ready(function() {
    function updateImage() {
        if ($(window).width() <= 767) {
            /*$('.personal-responsive-img').attr('src', 'img/222logo-white.png');
            $(window).scroll(function() {
                if ($(this).scrollTop() > 3) { // Cambia il valore 100 in base a quanto vuoi che l'utente scrolli
                    $('#main-content').addClass('visible-content');
                    $(".fixed-bg").addClass('dimmed');
                }
                else{
                    $('#main-content').removeClass('visible-content');
                    $('.fixed-bg').removeClass('dimmed');
                }
            });*/
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
    let imgList = ["ae", "aeffe", "agraria", "alimenta", "barPalazzetto", "barRoma", "beilis", 
        "bertea", "bonansone", "bottano", "busso", "donatella_gallo", "duvinaFormaggi", "effepiu", "evoedile", 
        "fulvioCaseificio", "gallo", "ilPruche", "kromo", "laLea", "muli", "neroDelRe", "officina626", 
        "officinaPiccato", "panetteriaRolle", "ricotto", "roda", "rovetto", "saiel", "salfer", "scalerandi", 
        "vedCostruzioniEdili", "vera", "villafrancaFiocchi"];
    
    for (let i = 0; i < imgList.length; i++) {
        let elem = `<div class="slide"><img height="200px" width="250px" src="${imgPath}${imgList[i]}${ext}" alt="${imgList[i]}" /></div>`;
        $(slider).append(elem);
    }
    for (let i = 0; i < imgList.length; i++) {
        let elem = `<div class="slide"><img height="200px" width="250px" src="${imgPath}${imgList[i]}${ext}" alt="${imgList[i]}" /></div>`;
        $(slider).append(elem);
    }
  
      const swiper = new Swiper('.swiper', {
        loop: false,
        effect: 'cards',
        perSlideOffset: 20,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: true
      });

    updateImage(); // Chiamata iniziale
    $(window).resize(updateImage); // Chiamata al ridimensionamento
    //console.log('script.js loaded');

    /* Toast con informazioni importanti */

    Swal.fire({
        title: "<h3>Hey stiamo per cominciare...🏎️💨</h3>",
        //text: "Accetti l'uso dei cookie per una migliore esperienza?",
        html: "<h4>Assicurati un posto al nostro evento, prenota ora e stai tranquillo😉."+
                " Non lasciarti sfuggire la possibilità di avere foto della tua macchina scattate ed editate " + 
                "da un fotografo professionista. Non importa che genere o marca di auto tu possieda: sono tutte benvenute. " + 
                "Abbiamo già supercar (Ferrari 488, Ferrari 296GTB, Audi R8, ecc...), giapponesi (Honda, Subaru), ferri direttamente dagli anni '90 " + 
                "(Fiat Uno Turbo), auto basse, auto larghe, rumorose... <u class='highline'>Cosa aspetti: manchi solo tu!!</u>",
        icon: "info",
        toast: false,
        position: "bottom",
        width: "100vw",
        showConfirmButton: true,
        showDenyButton: true,
        focusConfirm: false,
        didOpen: () => {
            // Rimuove il focus dal bottone di conferma (che potrebbe essere quello di 'success')
            const confirmButton = Swal.getConfirmButton();
            confirmButton.blur();  // Rimuove il focus dal bottone di conferma
          },
        confirmButtonText: "Vado a prenotare (sei un figo😎)",
        denyButtonText: "Mmmh fammi prima guardare il sito",
        customClass: {
            confirmButton: "btn page-scroll btn-green",
            denyButton: "btn btn-red page-scroll"
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        backdrop: false
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("Cookie accettati");
          $('html, body').animate({
            scrollTop: $("#footer-contact").offset().top
          }, 1000);
        } else if (result.isDenied) {
          console.log("Cookie rifiutati");
          //localStorage.setItem("cookieAccepted", "false");
        }
      });

    /*=============================================


    /* debug
    function checkBreakpoint() {
        let width = $(window).width();
        let breakpoint = '';

        if (width < 576) {
            breakpoint = 'XS (<576px)';
        } else if (width >= 576 && width < 768) {
            breakpoint = 'SM (≥576px)';
        } else if (width >= 768 && width < 992) {
            breakpoint = 'MD (≥768px)';
        } else if (width >= 992 && width < 1200) {
            breakpoint = 'LG (≥992px)';
        } else if (width >= 1200 && width < 1400) {
            breakpoint = 'XL (≥1200px)';
        } else {
            breakpoint = 'XXL (≥1400px)';
        }

        console.clear(); // Pulisce la console per evitare spam
        console.log(`Breakpoint attuale: ${breakpoint}`);
    }

    // Controllo iniziale
    checkBreakpoint();

    // Rileva il resize dello schermo
    $(window).resize(function() {
        checkBreakpoint();
    });*/
});