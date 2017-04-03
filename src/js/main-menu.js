(function() {
    "use strict";
    var $ = require("jquery");
    var $body = $("body");


    // Main menu
    (function() {
        var currentItemId = 0;
        var mainmenuItemSelector = '.menu-bar .menu-list li';
        var submenuItemSelector = '.menu-bar .submenu-list li';
        var submenuSelector = '.menu-bar .submenu-list';

        $body.on('click', mainmenuItemSelector, function () {
            var $this = $(this);
            var itemId = +$this.attr('data-item-id');

            if(itemId == currentItemId) return;

            $(mainmenuItemSelector).removeClass('active');
            $(submenuSelector).addClass('hidden')
            $(submenuSelector + '[data-menu-id = ' + itemId + ']').removeClass('hidden')
            $this.addClass('active');

            currentItemId = itemId;
        });

        $body.on('click', submenuItemSelector, function () {
            var $this = $(this);

            $(submenuItemSelector).removeClass('active');
            $this.addClass('active');
        });
    })();

}());