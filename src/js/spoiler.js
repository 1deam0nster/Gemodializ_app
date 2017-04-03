(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");

    $body.on('click', '.spoiler > .toggler', function(){
        var $this = $(this);

        $this.toggleClass('opened');
        $this.next('.content').slideToggle();
        $this.find('.fa').toggleClass('fa-angle-up fa-angle-down')
    });


})();