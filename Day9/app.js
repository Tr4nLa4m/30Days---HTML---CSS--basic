var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var temperature = document.querySelector('.temperature .value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var humidity = document.querySelector('.humidity span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI(Scity){
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Scity}&appid=52fd62403d8d68ff58d6220d651d59c3`;

    let data = await fetch(apiUrl).then(res => res.json());
    if(data.cod == 200){
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        humidity.innerText = data.main.humidity + '%';
        let temp = (data.main.temp - 273.15).toFixed(0); 
        temperature.innerText = temp;
        shortDesc.innerText = data.weather[0]? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString('vi');

        body.setAttribute('class', 'hot');
        if(temp < 10){
            body.setAttribute('class', 'cold');
        }else if(temp <17) {
            body.setAttribute('class', 'cool');
        }else if(temp <25) {
            body.setAttribute('class', 'warm');
        }else  {
            body.setAttribute('class', 'hot');
        }
    }else {
        content.classList.add('hide');
    }
    


}

search.addEventListener('keypress', function(e){

    if(e.code === 'Enter'){
        let searchCity = search.value.trim();
        changeWeatherUI(searchCity);
    }
})

changeWeatherUI('Ha noi');