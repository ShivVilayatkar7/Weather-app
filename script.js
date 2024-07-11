const apiKey = "aebd076074366d583664e42fb7125167";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("searchinput");
const searchBtn = document.getElementById("btninput");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();

        document.getElementById("city").innerHTML = data.name;
        document.getElementById("tmp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});