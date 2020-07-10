


// Create your API KEYs variable first 
// API for Current Weather 
// API for Five Day Forecast 
// Call the API using AJAX and add the cityInput 
// Use AJAX Method to get data 

var callWeatherApi = function(cityInput, addToList){
var APIKey = "d292af27d806c0fcfa7e75827ed7045b"
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;

var fiveDayURL = "api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + APIKey;

$.ajax({
    url: queryURL,
    Method: "GET"
})

}

// Create an event listener onClick for the search button using jQuery
// Inside the AJAX pull data for the responses: temp, humidity, wind speed
// Have
$(".btn-primary").on("click", function(event){
    event.preventDefault();
    // why did we do preventDefault here?

})


