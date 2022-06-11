const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY="54932d8d72f0383c39212c41e15d9542";

function onGeoOK(position){
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.2485376&lon=128.8667136&appid=54932d8d72f0383c39212c41e15d9542&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
         city.innerText =` city : ${data.name}`;
         weather.innerText =` weather : ${data.weather[0].main}  temp : ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);