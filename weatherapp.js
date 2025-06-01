//Update temp using current temp from API
function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let tempElement = document.querySelector("#city-current-temp");
  let temp = Math.round(response.data.temperature.current);
  tempElement.innerHTML = `${temp}`;
}

//City Search
//Update H1 to reflect city user entered
function searchForCity(event) {
  event.preventDefault();

  let cityElement = document.querySelector("#current-city");
  let cityInput = document.querySelector("#search-input");
  let city = cityInput.value;

  //API info
  let uniqueKey = `a723fd412o41a9d1a23tfcb7443f0307`;
  let apiKey = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${uniqueKey}&units=imperial`;

  axios.get(apiKey).then(displayTemperature);

  cityElement.innerHTML = city;
}

//Show current day and time in real time
function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let currentTime = `${day} ${hours}:${minutes}`;

  let citySearch = document.querySelector("#city-form");
  citySearch.addEventListener("submit", searchForCity);

  let updatedTime = document.querySelector("#time-update");
  if (updatedTime) {
    updatedTime.innerHTML = currentTime;
  }
}

updateClock();
