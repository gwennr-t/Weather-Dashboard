// save user input to local storage


// variable with array for search history
var searchHistory = [];

// search history
var searchHistory = 

searchHistory.push(userInput);
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

// API key variable
var apiKey = "53cebe99512b622d37b87c20ca19d2a4";

// function to search API - Current Weather
var currentWeather = function(){
    var cityLat = response.coord.lat;
    var cityLon = response.coord.lon;

    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + cityLat + "&lon=" + cityLon + "&appid=" + apiKey)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var currentCityDate = 
            var icon = 
            var currentTemp = 
            var currentWind = 
            var currentHumidity = 

            currentCityDate.text()
            icon.text()
            currentTemp.text()
            currentWind.text()
            currentHumidity.text()

        })
}

// function to search API - 5 Day Forecast
var fiveDayForecast = function(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=milwaukee&appid=" + apiKey + "&units=imperial")
        .then(function(response){
            return response.json();
        }) 
        .then(function(data){
            for(var i = 0; i < 5; i++) {
                var futureDate = 
                var futureIcon =
                var futureTemp = 
                var futureWind = 
                var futureHumidity =
                
                futureDate.text()
                futureIcon.text()
                futureTemp.text()
                futureWind.text()
                futureHumidity.text()
            }
        });

}

// clicking search button - done
// function handleSearchFormSubmit(event) {
//     event.preventDefault();

//     var userInputVal = document.querySelector("#city-input").value;

//     if(!userInputVal) {
//         console.error("You need a search input value!");
//         return;
//     }
//     searchAPI(userInputVal);
// }

// var searchForm = document.querySelector("#search-form");

// searchForm.addEventListener("search", handleSearchFormSubmit);
