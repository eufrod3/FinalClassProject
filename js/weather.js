$(document).ready(function () {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&APPID=d510695ba94ec51f90c6b9394b5d583e&",
        type: "GET",
        dataType: "jsonp",
        success: function(data){
            console.log(data);
            console.log(data.weather[0].main);
            console.log(data.main);
            console.log(data.main.temp);
            
            var information = show(data);
            $("#show").html(information);
        }
    });
})

function show(data){
    return "<h3>Current Temperature in Dallas: " + Math.round(data.main.temp) + "</h3>"
}