$(document).ready(function(){
    $("div.weather").mouseover(function(){
        $("div.weather").addClass("animated heartBeat slow").one("animationend", function(){
            $(this).removeClass("animated heartBeat slow");
        });
    });    
});

$(document).ready(function(){
    $("div.jumbotron").mouseenter(function(){
        $("div.jumbotron").addClass("animated headShake faster").one("animationend", function(){
            $(this).removeClass("animated headShake faster");
        });
    });    
});