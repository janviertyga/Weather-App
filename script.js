const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

searchBtn.addEventListener('click', async () => {
  const cityName = cityInput.value;
  if (cityName === '') {
    alert('Please enter a city name.');
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();

    if (data.cod === '404') {
      weatherInfo.innerHTML = 'City not found.';
    } else {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      weatherInfo.innerHTML = `Weather in ${cityName}: ${weatherDescription}, Temperature: ${temperature}°C`;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherInfo.innerHTML = 'An error occurred. Please try again later.';
  }
});