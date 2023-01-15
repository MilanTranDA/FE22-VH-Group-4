const button = document.querySelector('#btn');
button.addEventListener('click',searchForWeather);

const container = document.querySelector('#Container');



function searchForWeather(event) {
    event.preventDefault();

    const inputbox = document.querySelector('#text');
    const inputboxValue = inputbox.value;
    inputboxValue.value = '';

        console.log(inputboxValue)
    fetchfunction(inputboxValue);
}


function fetchfunction(country){

const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=c79d5ea95c63dffbb72a56fdbf56e59d
`;

fetch(fetchUrl)
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.json()
        } else {
            throw 'Something is wrong'

        }
    })
    .then(showWeatherData)
    .catch()


}

function showWeatherData(apiData) {
 console.log(apiData)


 const containerToShow  = document.createElement ('div');
 container.appendChild(containerToShow);

 const cityName = document.createElement('h3');
 containerToShow.appendChild(cityName);
 cityName.innerText = 'Weather in ' + apiData.name; 

 const weatherDescritption = document.createElement('h5');
 containerToShow.appendChild(weatherDescritption);
 weatherDescritption.innerText = apiData.weather[0].main;


 const temperaturCelcius = document.createElement('h3');
 containerToShow.appendChild(temperaturCelcius);
 temperaturCelcius.innerText = apiData.main.temp +  ' °C';

 
 const temperaturMax = document.createElement('h5');
 containerToShow.appendChild(temperaturMax);
 temperaturMax.innerText = 'Max  ' + apiData.main.temp_max + ' °C';

 const temperaturMin = document.createElement('h5');
 containerToShow.appendChild(temperaturMin);
 temperaturMin.innerText = 'Min  ' + apiData.main.temp_min + ' °C';


const imagefix = apiData.weather[0].icon;

 const imageUrl = `http://openweathermap.org/img/wn/${imagefix}@2x.png`
 const weatherIcon = document.createElement('img');
 containerToShow.appendChild(weatherIcon);
 weatherIcon.src = imageUrl;


}