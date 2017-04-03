(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");

    $body.on("focus", "input[type=text], input[type=password]", (function() {
        var $keyboard = $("#keyboard");
        var keyboardMargin = 20;
        var $lastInputElement;
        var keyboardIsOpen = false;

        return function () {

            if(keyboardIsOpen) return;

            var $input = $(this);
            var keyboardHeight = $keyboard.outerHeight();
            var inputTop = $input.offset().top;
            var inputHeight = $input.outerHeight();
            var windowHeight = $(window).height();

            var translateTo = (inputTop + inputHeight < windowHeight - keyboardHeight - keyboardMargin)
                ? -keyboardHeight
                : -(windowHeight - inputTop - inputHeight - keyboardMargin);

            $body.stop().animate({scrollTop: translateTo + keyboardHeight}, '400', 'swing');
            $keyboard.css({
                "transform": "translateY(" + translateTo + "px)"
            })

            $lastInputElement = $input;
            keyboardIsOpen = true;

            bindBlur();
        }

        function bindBlur() {
            $body.on("mousedown", ":not(#keyboard, .key)", function(e){

                e.stopPropagation();

                var $this = $(this);
                if($this.is($lastInputElement)) return;

                $body.stop().animate({scrollTop: 0}, '300', 'swing', function () {

                });
                $keyboard.css({
                    "transform": ""
                });

                keyboardIsOpen = false;
                unbindBlur();
            })
        }

        function unbindBlur() {
            $body.off("mousedown", ":not(#keyboard, .key)");
        }
    })());
}());