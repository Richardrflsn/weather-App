const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.querySelector('#weatherForm');
const myCity = document.querySelector('#city');
const image = document.querySelector('#weatherImage');
const weather = document.querySelector('#weatherMain');
const temp = document.querySelector('#temp');
const dates = document.querySelector('#todayDates');
const times = document.querySelector('#todayTime');
let date = new Date();

// function work when user input the city name
form.addEventListener('submit', function  (e){
    // to stop page reload
    e.preventDefault();

    // Updating the city name
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = '931f131dde3f4ae2fcbc3289fc646471';
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

    // fetching data from the weather api
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

        // Updating the DOM
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}`
        weather.innerHTML = `${weatherMain}`
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;
    })
})
