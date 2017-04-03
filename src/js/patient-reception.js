(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");

    $body.on('click', '.reception-tab', function(){
        var $this = $(this);

        $this.toggleClass('expanded');
        $this.next('.content').slideToggle();
    });

    $body.on('click', '.show-reception', (function() {
        var openedReceptions = 0;

        return function () {
            var $buttonIcon = $(this).children();
            var $receptContentList = $('.reception-content-list');
            var isOpening =  $buttonIcon.hasClass('fa-plus');
            isOpening ? ++openedReceptions : --openedReceptions;
            $buttonIcon.toggleClass('fa-plus fa-minus');
            $buttonIcon.closest('li').toggleClass('highlight');

            if(isOpening && openedReceptions > 1) {
                var lastReception = $receptContentList.find('.reception').last();
                var reception = lastReception.clone().css('display', 'none');
                reception.insertAfter(lastReception);
                reception.slideDown();
            }
            else if(!isOpening && openedReceptions) {
                var lastReception = $receptContentList.find('.reception').last();
                lastReception.slideUp('slow', function(){
                    console.log($(this));
                    $(this).remove();
                });
            }

            if(openedReceptions === 1 && isOpening) {

                $('.all-list-content, .current-selection-list-content').animate({
                    width: '50%'
                }, 1000);
            }
            else if(openedReceptions === 0) {

                $('.current-selection-list-content').animate({
                    width: '0px'
                }, 1000);

                $('.all-list-content').animate({
                    width: '100%'
                }, 1000);
            }
        }
    })());

    $body.on('click', '.open-reception, .new-reception, .close-reception', function() {
        $('.current-patient-reception, .patient-reception-list').slideToggle();
        $('.current-patient-reception').css('display','flex');
    });

    $body.on('click', 'li.reception-page-selector', function() {
        var $this = $(this);
        var $activeElement = $('li.reception-page-selector.active');

        var newPage = $this.attr('data-partial');
        var oldPage = $activeElement.attr('data-partial');

        if(newPage == oldPage) return;

        $('li.reception-page-selector').removeClass('active');
        $this.addClass('active');

        $(oldPage).slideUp();
        $(oldPage + '-program, ' + oldPage + '-journal').slideUp(); // ¯\_(ツ)_/¯
        $(newPage).slideDown();
    });

    // Registration
    $body.on('click', '.open-laboratory-analysis-popup', function() {
        $('.layout, .laboratory-analysis-popup').fadeIn();
    });

    $body.on('click', '.open-instrumental-analysis-popup', function() {
        $('.layout, .instrumental-analysis-popup').fadeIn();
    });

    $body.on('click', '.open-upload-attachment-popup', function() {
        $('.layout, .upload-attachment-popup').fadeIn();
    });

    $body.on('click', '.open-diagnoses-popup', function() {
        $('.layout, .diagnoses-popup').fadeIn();
    });

    $body.on('click', '.open-ckd-phase-popup', function() {
        $('.layout, .ckd-phase-popup').fadeIn();
    });

    // CKD-phase
    $body.on('click', '.open-ckd-phase, .open-ckd-phase-journal', function() {
        $('.ckd-phase, .ckd-phase-journal').toggle();
    });

    // Bone-mineral
    $body.on('click', '.open-bone-mineral, .open-bone-mineral-program', function() {
        $('.bone-mineral, .bone-mineral-program').toggle();
    });

    // Anemia
    $body.on('click', '.open-anemia, .open-anemia-program', function() {
        $('.anemia, .anemia-program').toggle();
    });

    // Hypertension
    $body.on('click', '.hypertension-program, .open-hypertension-program', function() {
        $('.hypertension, .hypertension-program').toggle();
    });
})();