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
    $("div.dtTemp").mouseenter(function(){
        $("div.dtTemp").css("background-color", "#427AA1");
        $("div.dtTemp").css("color", "white");        
    });
    $("div.dtTemp").mouseleave(function(){
        $("div.dtTemp").css("background-color", "white");
        $("div.dtTemp").css("color", "black");        
    });
});

// $(document).ready(function(){
//     $("div.dtTemp").mouseenter(function(){
//         $("div.dtTemp").addClass("bg-primary");
//         });
//     $("div.dtTemp").mouseleave(function(){
//         $("div.dtTemp").addClass("bg-white");
//     });
// });