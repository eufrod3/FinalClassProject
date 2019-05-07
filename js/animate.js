$(document).ready(function(){
    $("div.weather").mouseover(function(){
        $("div.weather").addClass("animated pulse").one("animationend", function(){
            $(this).removeClass("animated pulse");
        });
    });    
});

$(document).ready(function(){
    $("div.jumbotron").mouseover(function(){
        $("div.jumbotron").addClass("animated swing").one("animationend", function(){
            $(this).removeClass("animated swing");
        });
    });    
});