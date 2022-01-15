const API_KEY = "4bdf6651a10ae7b4bb3e20d1720e8fb7";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(`${lat}, ${long}`); //37.5606859, 127.0084065

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("cant find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
