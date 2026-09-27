
async function getWeatherData(location) {
  try {
    const API_KEY = "68cbea899b237c44ed887b6d3e4fee04";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`Location not found: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    // return data;

    const cleanData = processWeatherData(data);
    console.log("Cleaned data:", cleanData);
    return cleanData;
  } catch (error) {
    console.error(`Error fetching weather:`, error);
  }
}

function processWeatherData(rawData) {
  return {
    city: rawData.name,
    temp: Math.round(rawData.main.temp),
    feelsLike: Math.round(rawData.main.feels_like),
    humidity: rawData.main.humidity,
    wind: rawData.wind.speed,
    description: rawData.weather[0].description,
  };
}

const form = document.querySelector("form");
const search = document.querySelector("input");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop refresh the page

  const location = search.value.trim();
  if (!location) return;

  const weather = await getWeatherData(location);
  displayWeather(weather);
});

function displayWeather(data) {
  const container = document.querySelector("#weather-display");
  if (!data) return;

  container.innerHTML = `
    <h2>${data.city}</h2>
    <p>Temparature: ${data.temp}</p>
    <p>Feels like: ${data.feelsLike}</p>
    <p>Humidity: ${data.humidity}</p>
    <p>Wind: ${data.wind}</p>
    <p>Description: ${data.description}</p>
  `;
}

// getWeatherData("Gurugram");
