# 06-weather-dashboard
To retrieve data from another application's API to use it in the context of my own, I can access their data to use its functionality to retrieve data for cities. 
This Weather Dashboard will run in the browser using the Weather API from [OpenWeather API](https://openweathermap.org/api).

## User Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
## Acceptance Criteria
```
The user will be presented with weather dashboard where they will able to fill in the form input. 
The user will search a city that they wish to pull the data from the openweathermap API
WHEN the user clicks search with the city they've enter 
THEN they will be presented back with their results of the current weather of the current day + the five day forecast
WHEN the data has been recieved 
THEN the data will be displayed onto the cards containing the cards dynamically: an icon representation of weather conditions, the temperature, the humidity, the wind speed. 
WHEN the user enters the city, it will be locally stored 
THEN the user can see through an unordered list of the last city that was searched while being able to search other cities 
WHEN the user wants to refresh 
THEN the user will still be able to see the last city that was searched.

```
# Demo
```
![](images/searchbar.png



The following image demonstrates the application functionality:
* https://mrjohnsonpham.github.io/06-weather-dashboard/
* https://github.com/mrjohnsonpham/06-weather-dashboard
