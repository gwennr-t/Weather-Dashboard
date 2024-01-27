// local storage and search history variables
var input = document.getElementById("city-input");
var button = document.getElementById("search-button");
var msgDiv = document.querySelector("#msg");
var userSearchList = document.getElementById("search-history");
var searches = [];

// 
function renderHistory () {
    userSearchList.innerHTML = "";

    for (var i = 0; i < searches.length ; i++) {
        var search = searches[i];
        var newButton = document.createElement("button");

        newButton.textContent = search;
        newButton.setAttribute("data-index", i);

        userSearchList.appendChild(newButton);
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

    var search = userSearchList.value;
    var searchText = input.value.trim();

    if (search === "") {
        return;
    }

    searches.push(searchText);
    input.value = "";

    storeSearches();
    renderHistory();
});

init();

// API key variable
var apiKey = "53cebe99512b622d37b87c20ca19d2a4";
var currentCity = document.querySelector(".current-city-date");
var currentIcon = document.querySelector("#icon");
var currentTemp = document.querySelector("#current-city-temperature");
var currentWind = document.querySelector("#current-city-wind");
var currentHumidity = document.querySelector("#current-city-humidity");

// function to search API - Current Weather
var currentWeather = function(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + apiKey + "&units=imperial")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var currentCityDate = data["dt_txt"];
            var icon = data["weather"][0]["icon"];
            var currentTemp1 = data["main"]["temp"];
            var currentWind1 = data["wind"]["speed"];
            var currentHumidity1 = data["main"]["humidity"];

            currentCity.innerHTML = currentCityDate;
            currentIcon.innerHTML = icon;
            currentTemp.innerHTML = currentTemp1;
            currentWind.innerHTML = currentWind1;
            currentHumidity.innerHTML = currentHumidity1;
        })
}

currentWeather();

// function to search API - 5 Day Forecast
var futureDate = document.querySelector("#future-" + i);
var futureIcon = document.querySelector("#future-icon-" + i);
var futureTemp = document.querySelector("#future-temp-" + i);
var futureWind = document.querySelector("#future-wind-" + i);
var futureHumidity = document.querySelector("#future-humidity-" + i);

var fiveDayForecast = function() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + apiKey + "&units=imperial")
        .then(function(response){
            return response.json();
        }) 
        .then(function(data){
            for(var i = 0; i < 5; i++) {
                var futuredate1 = data["list"]["main"]["dt_text"];
                var futureIcon1 = data["list"]["weather"]["icon"];
                var futureTemp1 = data["list"]["main"]["temp"];
                var futureWind1 = data["list"]["wind"]["speed"];
                var futureHumidity1 = data["list"]["main"]["humidity"];

                futureDate.innerHTML = futuredate1;
                futureIcon.innerHTML = futureIcon1;
                futureTemp.innerHTML = futureTemp1;
                futureWind.innerHTML = futureWind1;
                futureHumidity.innerHTML = futureHumidity1;
            }
        });

}

fiveDayForecast();