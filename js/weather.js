$(document).ready(function () {
    $('#submitWeather').click(function () {
        var city = $("#city").val();

        if (city != '') {
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units = imperial" + "&APPID=d510695ba94ec51f90c6b9394b5d583e&",
                type: "GET",
                dataType: "jsonp",
                success: function(data)
            });
        } else {
            $("#error").html('field cannot be empty');
        }
    })
});