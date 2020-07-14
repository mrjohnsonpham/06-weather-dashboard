
// Create an event listener onClick for the search button using jQuery after you've done your variables for your API first 
// Inside the AJAX pull data for the responses: temp, humidity, wind speed and UV index
// Have

$(".btn-primary").on("click", function(event) {
    // event.preventDefault();
    // why did we use preventDefault function?
    var cityInput = $("#searchTerms").val();

    callWeatherApi(cityInput, true);
    // why did we put true?
});


// Created so that the city input will be saved 
// Once the search button is click, the town/city will be called the callWeatherApi and be locally stored by that same function we created and included in the function
$(document).on("click", ".city", function() {
    var cityName = $(this).text()
    callWeatherApi(cityName, false)
    // why did we put false?
})


// Started here first 
// Create your API KEYs variable first 
// API for Current Weather 
// API for Five Day Forecast 
// Call the API using AJAX and add the cityInput 
// Use AJAX Method to get data 

var callWeatherApi = function(cityInput, addToList) {

    var APIKey = "d292af27d806c0fcfa7e75827ed7045b"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityInput + "&appid=" + APIKey;
    // var qUVindex = "https://api.openweathermap.org/data/2.5/uvi?" + "&appid=" + APIKey;
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + cityInput + "&appid=" + APIKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);
        // must do if not, you won't be able to see the key's to use that you want to grab data from 

        var weatherIcon = response.weather[0].icon;

        $("#cityName").html(response.name + " (" + new Date().toLocaleDateString() + ")");
        $("#mainIcon").html("<img src='" + "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png" + "'>")
        $("#temperature").html("Temperature: " + response.main.temp + " &#8457;");
        // where did &#8457 come from? it is the html for fahrenheit
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#wind-speed").text("Wind Speed: " + response.wind.speed + " MPH ")
        $("#uv-index").text("UV Index");
    });


// Add localStorage for City Input and append the search results 
// Create a button using jQuery
// Create a unordered list class and have it appended to the button 
// Have the list be able to display the text from the City Input text field

if (addToList === true){
    var li = $("<button class='list-group-item town'>");
    // created a button with a variable to call to append to the list
    $("ul").append(li);
    li.text(cityInput);
    // the user's city Input is appended to the list and display through text
}



// Use the Weather API to call the Five day Forecast
// Create a variable for the five day forecast 
// Create a loop for the five day forecast to appear 
// Find through the response where the index should start and how much to increment 
// Create a variable for the forecastIndex
// 

// $.ajax({
//     url: qUVindex,
//     method: "GET"
// }).then(function (UVresponse) {
//     var UVIndex = UVresponse.value;
//     var pTag = $("<p>").text("UV Index: " + UVIndex)
//     currentdata.append(pTag);
//     pTag.addClass("index");
//     var UVcond
//     //UV Index color that indicates whether the conditions are favorable, moderate, or severe
//     if (UVIndex > 2) {
//         $(".index").css("background-color", "#82E0AA");
//         UVcond = $("<p>").text("Favorable");
//         currentdata.append(UVcond);
//     }
//     else if (UVIndex < 6) {
//         $(".index").css("background-color", "#FFF176");
//         UVcond = $("<p>").text("Moderate");
//         currentdata.append(UVcond);
//     }
//     else if (UVIndex < 8) {
//         $(".index").css("background-color", "#FFB74D");
//         UVcond = $("<p>").text("Moderate");
//         currentdata.append(UVcond);
//     }
//     else if (UVIndex < 11) {
//         $(".index").css("background-color", "red");
//         UVcond = $("<p>").text("Severe");
//         currentdata.append(UVcond);
//     }
//     else {
//         $(".index").css("background-color", "firebrick");
//         UVcond = $("<p>").text("SEVERE");
//         currentdata.append(UVcond);
//     }
//     $(currentdata).append(UV);
   
// })




$.ajax({
    url: fiveDayURL,
    method: "GET"
})
.then(function(response) {
    console.log(response);

    var forecastIndex = 1

    for (i = 6; i < response.list.length; i += 8) {

        var fivedayIcon = response.list[i].weather[0].icon;

        $("#frcst" + forecastIndex).html("").append("<div>" + new Date(response.list[i].dt_txt).toLocaleDateString() + "<br>" + "<img src='" + "http://openweathermap.org/img/wn/" + fivedayIcon + "@2x.png" + "'>" + "</div>");
        $("#frcstIcon").html(response.list[i].weather[0].icon);
        $("#frcst" + forecastIndex).append("<div class='frcstTemp'>" + "Temp: " + response.list[i].main.temp + " &#8457;" + "</div>");
        $("#frcst" + forecastIndex).append("<div>" + "Humidity: " + response.list[i].main.humidity + "%" + "</div>");
        forecastIndex++
         // without it, it would not display all the cards and only show the result of one
    }
});
}
