(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");

    (function() {
        var switchersClass = '.diagnostic-workspace .viewport-switcher';

        $body.on('click', switchersClass, function(){
            var $this = $(this);
            var isCurrentActive = $this.hasClass('active');

            if(isCurrentActive) return;

            $(switchersClass).removeClass('active');
            $this.addClass('active');


        });
    })();
})();