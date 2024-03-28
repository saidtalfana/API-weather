
const api = "https://api.openweathermap.org/data/2.5/weather?q=fes&appid=29524cbd82c2daa726175f3d9ed38508&units=metric"
 async function get(){
const response = await fetch (api);
const data = await response.json();

console.log(data )
document.querySelector('.cityName').innerHTML = data.name;
document.querySelector('.Temperature').innerHTML = data.main.temp;
document.querySelector('.hum').innerHTML = data.main.humidity;
document.querySelector('.wind').innerHTML = data.wind.speed;
}
get()