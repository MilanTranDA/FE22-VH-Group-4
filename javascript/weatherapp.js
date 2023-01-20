const buttonForSearch = document.querySelector('#buttonForSearchInput');
buttonForSearch.addEventListener('click', searchForWeather);
const mainContainerToshowWeather = document.querySelector('#mainContainerToshowWeather');
const error = document.querySelector('#errorParagraf');


//created so that it shows malmö weather automaticly when you enter the website. 
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
        // .then(createDataByDay)
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
    
    // Lägg in dagen för de framtida dagarna
    for (i = 0; i < 5; i++) {
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date();
        // let findDay = ;
        let day = weekday[date.getDay()];
        const dayForWeather = document.createElement('h3');
        smalleContainerShowingWeather.appendChild(dayForWeather);
        dayForWeather.innerText = weekday[date.getDay()+i];
        dayForWeather.classList.add("CurrentDayforWeather")

        const weatherDescription = document.createElement('h5');
        smalleContainerShowingWeather.appendChild(weatherDescription);
        weatherDescription.innerText = apiData.list[i].weather[0].main;
        weatherDescription.classList.add("weatherDescription")
    
        const temperatureCelcius = document.createElement('h3');
        smalleContainerShowingWeather.appendChild(temperatureCelcius);
        temperatureCelcius.innerText = apiData.list[i].main.temp;
        temperatureCelcius.classList.add("temperatureCelcius")
    
        const temperatureMax = document.createElement('h5');
        smalleContainerShowingWeather.appendChild(temperatureMax);
        temperatureMax.innerText = '↑  ' + apiData.list[i].main.temp_max + ' °C';
        temperatureMax.classList.add("temperatureMax")
    
        const temperatureMin = document.createElement('h5');
        smalleContainerShowingWeather.appendChild(temperatureMin);
        temperatureMin.innerText = '↓  ' + apiData.list[i].main.temp_min + ' °C';
        temperatureMin.classList.add("temperatureMin")
    
        const tempertureContainer = document.createElement('div');
        tempertureContainer.classList.add('temperatureCon');
        smalleContainerShowingWeather.appendChild(tempertureContainer);
        tempertureContainer.appendChild(temperatureMax)
        tempertureContainer.appendChild(temperatureMin)
    
        const WeatherIcon = apiData.list[i].weather[0].icon;
        const imageUrl = `http://openweathermap.org/img/wn/${WeatherIcon}@2x.png`
        const showWeatherIconImage = document.createElement('img');
        smalleContainerShowingWeather.appendChild(showWeatherIconImage);
        showWeatherIconImage.src = imageUrl;
        showWeatherIconImage.classList.add('weatherIcon')
    
        console.log(apiData.list[i])
    }
}



function showErrorMessage(errorMessage) {
    error.innerText = errorMessage;
    // smalleContainerShowingWeather.innerHTML = '';
}
