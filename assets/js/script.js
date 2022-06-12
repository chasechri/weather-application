// function getApi() {
// var reqUrl =
// "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=d073d2c3af0e96b5e9680ba99aa47d05";
// fetch(reqUrl)
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// console.log(data);
// });
// }
// getApi();

// daily. uvi temp humidity wind speed
var button = document.querySelector(".submit");
var input = document.querySelector(".searchInput");
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var uvi = document.querySelector(".uvi");
var saved = document.querySelector(".save-btn");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=d073d2c3af0e96b5e9680ba99aa47d05"
  )
    .then((response) => response.json())
    .then((data) => {
      var cityVal = data["name"];
      var tempVal = data["main"]["temp"];
      var windVal = data["wind"]["speed"];
      var humidityVal = data["main"]["humidity"];

      city.innerHTML = cityVal;
      temp.innerHTML = tempVal;
      wind.innerHTML = windVal;
      humidity.innerHTML = humidityVal;
    })

    .catch((err) => alert("city not found"));
});
