$(document).ready(function(){
    $("div.weather").mouseenter(function(){
        $("div.weather").addClass("animated heartBeat slower").one("animationend", function(){
            $(this).removeClass("animated heartBeat slower");
        });
    });    
});

$(document).ready(function(){
    $("a.navbar-brand").mouseenter(function(){
        $("a.navbar-brand").addClass("animated headShake faster").one("animationend", function(){
            $(this).removeClass("animated headShake faster");
        });
    });    
});