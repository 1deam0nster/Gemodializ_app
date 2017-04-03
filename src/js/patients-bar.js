(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");

    $body.on('click', '.filter-toggler', function(){
        $('.filter-settings').slideToggle();
    });

    $body.on('click', '.patient-popup-open', function() {
        $('.layout, .patient-popup').fadeIn();
    });

    $body.on('click', '.open-documents-archive', function() {
        $('.layout, .documents-archive-popup').fadeIn();
    });

    $body.on('click', '.open-patient-journal', function() {
        $('.layout, .journal-popup').fadeIn();
    });

    $body.on('click', '.check-diagnosis', function() {
        $('.layout, .check-diagnosis-popup').fadeIn();
    });

    (function() {
        var tabType = {
            allPatients: 0 ,
            currentPatient: 1
        };

        var patientBarWidth = $('.patient-bar').width();

        var currentTab = tabType.allPatients;

        $body.on('click', '.switch-patient-tab', function () {
            var $this = $(this);
            var tabId = +$this.attr('data-tab');

            if(tabId == currentTab) return;

            var offsetX = -patientBarWidth * tabId;
            $('.switch-patient-tab').removeClass('active');
            $('.switcher-content').css('transform', 'translateX(' + offsetX + 'px)');
            $this.addClass('active');

            currentTab = tabId;
        });
    })();
})();