const buttonForSearch = document.querySelector('#buttonForSearchInput');
buttonForSearch.addEventListener('click',searchForWeather);
const mainContainerToshowWeather = document.querySelector('#mainmainContainerToshowWeatherForWeatherapp');

function searchForWeather(event) {
    event.preventDefault();
    const inputSearchBox = document.querySelector('#searchinput');
    const inputSearchBoxValue = inputSearchBox.value;
    inputSearchBoxValue.value = '';

        console.log(inputSearchBoxValue)
    fetchfunction(inputSearchBoxValue);
}

function fetchfunction(SearchedForcity){
const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${SearchedForcity}&units=metric&appid=c79d5ea95c63dffbb72a56fdbf56e59d
`;

fetch(fetchUrl)
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json()
        } else {
            throw 'Something went wrong!'

        }
    })
    .then(showWeatherData)
    .catch()
}

function showWeatherData(apiData) {
 console.log(apiData)

 const smalleContainerShowingWeather  = document.createElement ('div');
 mainContainerToshowWeather.appendChild(smalleContainerShowingWeather);
 smalleContainerShowingWeather.classList.add("smallContainerForWeather")

 const cityName = document.createElement('h3');
 smalleContainerShowingWeather.appendChild(cityName);
 cityName.innerText = 'Weather in ' + apiData.name; 
 cityName.classList.add("cityName")

 const weatherDescription = document.createElement('h5');
 smalleContainerShowingWeather.appendChild(weatherDescription);
 weatherDescription.innerText = apiData.weather[0].main;
 weatherDescription.classList.add("weatherDescription")

 const temperatureCelcius = document.createElement('h3');
 smalleContainerShowingWeather.appendChild(temperatureCelcius);
 temperatureCelcius.innerText = apiData.main.temp +  ' °C';
 temperatureCelcius.classList.add("temperatureCelcius")

 const temperatureMax = document.createElement('h5');
 smalleContainerShowingWeather.appendChild(temperatureMax);
 temperatureMax.innerText = 'Max  ' + apiData.main.temp_max + ' °C';
 temperatureMax.classList.add("temperatureMax")

 const temperatureMin = document.createElement('h5');
 smalleContainerShowingWeather.appendChild(temperatureMin);
 temperatureMin.innerText = 'Min  ' + apiData.main.temp_min + ' °C';
 temperatureMin.classList.add("temperatureMin")


const WeatherIcon = apiData.weather[0].icon;

 const imageUrl = `http://openweathermap.org/img/wn/${WeatherIcon}@2x.png`
 const showWeatherIconImage = document.createElement('img');
 smalleContainerShowingWeather.appendChild(showWeatherIconImage);
 showWeatherIconImage.src = imageUrl;
 showWeatherIconImage.classList.add('weatherIcon')


}