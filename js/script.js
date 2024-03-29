const apiKey = '29524cbd82c2daa726175f3d9ed38508';
const inputSearch = document.querySelector('.search_input');
const btn = document.querySelector('.search_button');
const icon = document.querySelector('.icons');
const Status = document.querySelector('.status');

async function get(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(api);
    const data = await response.json();
    console.log(city);
    document.querySelector('.cityName').innerHTML = data.name;
    document.querySelector('.Temperature').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.hum').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h";
 
    
      
    
    if(data.weather[0].main =="Clouds"){
      icon.src = "./image/cloud.png";
      Status.innerHTML = 'cloud';

    } else if(data.weather[0].main =="clear"){
      icon.src = "./image/clear.png";
      Status.innerHTML = 'Clear';

    }else if(data.weather[0].main =="Rain"){
      icon.src = "./image/raing.png";
      Status.innerHTML = 'raing';
    }else if(data.weather[0].main =="Drizzle"){
      icon.src = "./image/drizzle.png";
      Status.innerHTML = 'Drizzle';
    }else if(data.weather[0].main =="Mist"){
      icon.src = "./image/mist.png";
      Status.innerHTML = 'cloud';
    }

}

btn.addEventListener('click', () => {
    get(inputSearch.value);
});
