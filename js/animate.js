// $(document).ready(function(){
//     $("div.weather").mouseover(function(){
//         $("div.weather").addClass("animated headShake slower").one("animationend", function(){
//             $(this).removeClass("animated headShake slower");
//         });
//     });    
// });

$(document).ready(function(){
    $("a.navbar-brand").mouseenter(function(){
        $("a.navbar-brand").addClass("animated heartBeat slower").one("animationend", function(){
            $(this).removeClass("animated heartBeat slower");
        });
    });    
});

$(document).ready(function(){
    $("div.weather").mouseenter(function(){
        $("div.weather").css("background-color", "yellow");
        });
    $("div.weather").mouseleave(function(){
        $("div.weather").css("background-color", "white");
    });
});
