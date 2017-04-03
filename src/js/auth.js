(function() {
    "use strict";

    $(".sign-in").on("click", function(){
        $(".fields, .additional").fadeOut("fast")
            .promise()
            .then( function(){
                $(".progress").fadeIn("slow").css("display", "flex");
            })
            .then( function (){
                // Sign In Mock
                setTimeout(function() {
                    $(".authorize").addClass("complete");
                    setTimeout( function() {
                        document.location = "index.html";
                    }, 1500)
                }, 2000);
            })
    });
})();