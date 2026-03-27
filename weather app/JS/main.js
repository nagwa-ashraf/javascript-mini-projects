const apiKey = "cac60ddd1eaf08869267cdaa8da72f1e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.querySelector(".weather .temp");
let city = document.querySelector(".weather .city");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let weatherBox = document.querySelector(".weather");
let errorCity= document.querySelector(".error");

async function checkWeather(cityName){
    let response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    if(response.status == 404){
        weatherBox.style.display = "none";
        errorCity.style.display = "block";
    }else if (response.status == 200){
        errorCity.style.display = "none"
    }
    let data = await response.json();
    console.log(data);


    temp.textContent = Math.round(data.main.temp) + "°C";
    city.textContent = data.name;
    humidity.textContent = data.main.humidity + " %";
    wind.textContent =data.wind.speed + " km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "./assets/images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "./assets/images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "./assets/images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "./assets/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "./assets/images/mist.png";
    }
 
    weatherBox.style.display = "block";

    
}


searchBtn.addEventListener("click", ()=> {

    checkWeather(searchBox.value);
})

