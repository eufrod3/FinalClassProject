$(document).ready(function(){
    $('#submitWeather').click(function(){
        var city = $("#city").val();

        if(city!= ''){
           $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?APPID=d510695ba94ec51f90c6b9394b5d583e&q=" + city  + "",
           }); 
        }else{
            $("#error").html('field cannot be empty');
        }
    })
});