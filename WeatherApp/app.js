let apiKey = "aee5b5031a1460bce1869b7a68f3392b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector("#search input");
const searchButton = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weatherIcon");

async function weatherCheck(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('#error').style.display = "block";
        document.querySelector('#weather').style.display = "none";
    } else {
        let data = await response.json();
        document.querySelector('h5').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('#humid').innerHTML = data.main.humidity + "%";
        document.querySelector('#wind').innerHTML = data.wind.speed + "Km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Haze":
                weatherIcon.src = "images/mist.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Winds":
                weatherIcon.src = "images/wind.png";
                break;

            default:
                break;
        }
        document.querySelector('#weather').style.display = "block";
        document.querySelector('#error').style.display = "none";
    }



}
// weatherCheck();
searchButton.addEventListener('click', function () {
    weatherCheck(searchBar.value);
})