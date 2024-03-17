const btn = document.getElementById("btn");
const input = document.getElementById("cityInput");

function fetchData(cityName) {
  const url = `https://weather-website-backend-61ar.onrender.com/api/?cityname=${cityName}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // response is JSON
    })
    .then((data) => {
      // Process the data received
      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = `<h2 id="location">Location:${data.name}</h2>
      <p id="temp">Temperature: ${data.main.temp}°C</p>
      <p id="desc">${data.weather[0].description}</p>`;
      console.log(data.name);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      document.getElementById(
        "weather-info"
      ).innerHTML = `<h2 id="fail">Failed to fetch the weather, Please try again.</h2>`;
      console.error("There was a problem with the fetch operation:", error);
    });
}
btn.addEventListener("click", function () {
  console.log("clicked");
  var cityName = input.value;
  console.log(cityName);
  fetchData(cityName);
});
