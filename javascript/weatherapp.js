const buttonForSearch = document.querySelector('#buttonForSearchInput');
buttonForSearch.addEventListener('click', searchForWeather);
const mainContainerToshowWeather = document.querySelector('#mainContainerToshowWeather');
const error = document.querySelector('#errorParagraf');



function performinitialSearch() {
    fetchfunction('Malmö');

}
performinitialSearch();

function searchForWeather(event) {
    event.preventDefault();
    const inputSearchBox = document.querySelector('#searchinput');
    const inputSearchBoxValue = inputSearchBox.value;
    inputSearchBoxValue.value = '';

    console.log(inputSearchBoxValue)
    fetchfunction(inputSearchBoxValue);
}

function fetchfunction(SearchedForcity) {
const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${SearchedForcity}&units=metric&cnt=5&appid=c79d5ea95c63dffbb72a56fdbf56e59d`;

    fetch(fetchUrl)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                throw 'Something went wrong!'

            }
        })
        .then(showWeatherData)
        .catch(showErrorMessage)
}

function showWeatherData(apiData) {
    console.log(apiData)
    mainContainerToshowWeather.innerHTML = '';
    error.innerText = '';


    const smalleContainerShowingWeather = document.createElement('div');
    mainContainerToshowWeather.appendChild(smalleContainerShowingWeather);
    smalleContainerShowingWeather.classList.add("smallContainerForWeather")


    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    let day = weekday[date.getDay()];
    console.log(day)
    
    const cityName = document.createElement('h3');
    smalleContainerShowingWeather.appendChild(cityName);
    cityName.innerText = 'Weather in ' + apiData.city.name;
    cityName.classList.add("cityName")

    const weatherDescription = document.createElement('h5');
    smalleContainerShowingWeather.appendChild(weatherDescription);
    weatherDescription.innerText = apiData.list[0].weather[0].main;
    weatherDescription.classList.add("weatherDescription")

    const temperatureCelcius = document.createElement('h3');
    smalleContainerShowingWeather.appendChild(temperatureCelcius);
    temperatureCelcius.innerText = apiData.list[0].main.temp + ' °C';
    temperatureCelcius.classList.add("temperatureCelcius")

    const temperatureMax = document.createElement('h5');
    smalleContainerShowingWeather.appendChild(temperatureMax);
    temperatureMax.innerText = 'Max  ' +  apiData.list[0].main.temp_max+ ' °C';
    temperatureMax.classList.add("temperatureMax")

    const temperatureMin = document.createElement('h5');
    smalleContainerShowingWeather.appendChild(temperatureMin);
    temperatureMin.innerText = 'Min  ' +  apiData.list[0].main.temp_max+ ' °C';
    temperatureMin.classList.add("temperatureMin")

    const tempertureContainer = document.createElement('div');
    tempertureContainer.classList.add('temperatureCon');
    smalleContainerShowingWeather.appendChild(tempertureContainer);
    tempertureContainer.appendChild(temperatureMax)
    tempertureContainer.appendChild(temperatureMin)


    const WeatherIcon = apiData.list[0].weather[0].icon;
    const imageUrl = `http://openweathermap.org/img/wn/${WeatherIcon}@2x.png`
    const showWeatherIconImage = document.createElement('img');
    smalleContainerShowingWeather.appendChild(showWeatherIconImage);
    showWeatherIconImage.src = imageUrl;
    showWeatherIconImage.classList.add('weatherIcon')

}


function showErrorMessage(errorMessage) {
    error.innerText = errorMessage;
    smalleContainerShowingWeather.innerHTML = '';
}
