(function(){
    "use strict";
    window['$'] = window.jQuery = require("jquery");
    require("malihu-custom-scrollbar-plugin")($);

    $(document).ready(function(){

        // TODO: Перенести куда-нить. Дублируется в разметке Сводной информации
        $(".laboratory-analysis .content, .notifications .content, .drug-therapy .content").mCustomScrollbar({theme : "minimal"});

        var $body = $("body");

        require('./routing.js');
        require('./spoiler.js');
        require('./header.js');
        require('./patients-bar.js');
        require('./main-menu.js');
        require('./keyboard.js');
        require('./popup.js');
        require('./diagnostic.js');
        require('./patient-reception.js');


        $(".content").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", ".animated", function(){
            $(this).removeClass("animated");
        });

        $(".tab").click(function(){
            $(this).fadeOut(200,function(){
                $(this).parent().animate({"left":"0"})
            });
        });
    });
})();