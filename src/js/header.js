(function () {
    "use strict";
    var $body = $("body");

    (function() {
        var menus = [
            {
                button: ".ldp-analysis-btn",
                menu: ".ldp-analysis-menu"
            }
        ];

        menus.forEach(function (item) {
            bindMenuItem(item);
        });

        function bindMenuItem(item) {
            $body.on("click", item.button, function () {
                openMenu($(item.menu));
            });

            $body.on("mouseleave", item.button + ", " + item.menu, function () {
                closeMenu($(item.menu));
            });

            if($(item.menu).hasClass("header-menu"))
                calculatePosition(item);
        };

        function openMenu($menuElement) {
            $menuElement.removeClass("animated fadeOutUp");
            $menuElement.addClass("animated fadeInDown").css("display", "flex").show();
        }

        function closeMenu($menuElement) {
            $menuElement.removeClass("animated fadeInDown");
            $menuElement.addClass("animated fadeOutUp").fadeOut();
        }

        function calculatePosition(item)
        {
            var left = $(item.button).position().left;
            $(item.menu).css("margin-left", left);
        }
    })();

    // Divisions switcher
    (function(){
        $body.on("click", ".divisions > li", function(){
            var $this = $(this);
            var itemPosition = $this.position();
            var divisionId = $this.attr("data-division");
            var divisionContentHeight = $(".divisions-content").outerHeight();

            $(".divisions > li").removeClass("current");
            $this.addClass("current");
            $(".division-submenu").hide();

            var submenu = $(".division-submenu[data-division = " + divisionId + "]");
            var submenuHeight = submenu.outerHeight();
            submenu.show();

            if( divisionContentHeight < itemPosition.top + submenuHeight )
                submenu.css("margin-top", divisionContentHeight - submenuHeight);
            else
                submenu.css("margin-top", itemPosition.top);

        });
    })();

    $body.on("click", ".signout", function() {
        $body.fadeOut("slow")
            .promise()
            .then(function(){
                document.location = "auth.html";
            })
    });
})();