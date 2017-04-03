// Pseudo-routing
(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");

    $body.on("click", "a", (function () {
        var defaultContainer = null;

        return function (e) {
            e.preventDefault();
            var $this = $(this);
            var href = $this.attr("href");
            var $container = getAjaxContainer($this);

            if (href && href != "#") {
                $.get(href).then(function (res) {
                    $container.fadeOut().promise()
                        .done(function () {
                            $container.html(res).fadeIn();
                        });

                });
            }
        }

        function getDefaultContainer()
        {
            var defaultContainerSelector = ".ajax-content";

            defaultContainer = defaultContainer || $(defaultContainerSelector);
            return defaultContainer;
        }

        function getAjaxContainer($linkElement){

            var containerSelector = $linkElement.attr("ajax-target");

            if(!containerSelector)
                return getDefaultContainer();

            var $container = $(containerSelector);

            if(!$container.length) {
                console.warn("Maximus: The element with '" + containerSelector + "' selector is not found. Default element is used instead.");
                return getDefaultContainer();
            }

            return $container
        }


    })());
})();