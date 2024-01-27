// local storage and search history variables
var input = document.getElementById("city-input");
var button = document.getElementById("search-button");
var msgDiv = document.querySelector("#msg");
var userSearchSpan = document.getElementById("search-history");
var searches = [];

// display messages for error or success
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

// 
function renderHistory () {
    userSearchSpan.textContent = searches.length;

    for (var i = 0; i < searches.length; i++) {
        var search = searches[i];

        var li = document.createElement("li");
        li.textContent = search;
    }
}

// 
function init() {
    var storedSearches = JSON.parse(localStorage.getItem("searches"));

    if (storedSearches !== null) {
        searches = storedSearches;
    }
    renderHistory();
}

function storeSearches() {
    localStorage.setItem("searches", JSON.stringify(searches));
}

button.addEventListener("click", function(event) {
    event.preventDefault();

    var search = userSearchSpan.value;

    if (search === "") {
        displayMessage("error", "Please enter a valid city name.")
    } else {
        displayMessage("success", "Enjoy the weather!")

        localStorage.setItem("search", searches);
        renderHistory();
    }
});


// API key variable
var apiKey = "53cebe99512b622d37b87c20ca19d2a4";

// function to search API - Current Weather
var currentWeather = function(){
    var cityLat = response.coord.lat;
    var cityLon = response.coord.lon;

    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial")
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            var currentCityDate = document.querySelector(".current-city-date");
            var icon = document.querySelector("#icon");
            var currentTemp = document.querySelector("#current-city-temperature");
            var currentWind = document.querySelector("#current-city-wind");
            var currentHumidity = document.querySelector("#current-city-humidity");

            currentCityDate.innerHTML = response[""];
            icon.innerHTML = response[""];
            currentTemp.innerHTML = response[""];
            currentWind.innerHTML = response[""];
            currentHumidity.innerHTML = response[""];

        })
    console.log(response)
}

// function to search API - 5 Day Forecast
var fiveDayForecast = function(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial")
        .then(function(response){
            return response.json();
        }) 
        .then(function(data){
            for(var i = 0; i < 5; i++) {
                var futureDate = document.querySelector("#future-" + i);
                var futureIcon = document.querySelector("#future-icon-" + i);
                var futureTemp = document.querySelector("#future-temp-" + i);
                var futureWind = document.querySelector("#future-wind-" + i);
                var futureHumidity = document.querySelector("#future-humidity-" + i);
                
                futureDate.innerHTML = response[""];
                futureIcon.innerHTML = response[""];
                futureTemp.innerHTML = response[""];
                futureWind.innerHTML = response[""];
                futureHumidity.innerHTML = response[""];
            }
        });

}

