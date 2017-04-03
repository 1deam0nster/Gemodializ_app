(function(){
    "use strict";
    var $main = $(".main");

    $main.on("openPopup", function(){
        $(".layout").fadeIn("slow")
            .promise()
            .then( function() {
                $(".popup").fadeIn("slow").css("display", "flex");
            })
    });

    $main.on("click", ".close-popup", function(){
        $(".popup, .layout").fadeOut("slow");
    });
})();