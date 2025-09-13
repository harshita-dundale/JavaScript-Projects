// Function to fetch weather data
async function getData(city) {
    let apiKey = '58c2acaafb4b76c72ee3323933f2c470';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        let data = await response.json();
        return data;  // Return the weather data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert(error.message);  // Display error message
    }
}

// Function to update UI with fetched data
async function updateWeatherInfo(city) {
    let weatherData = await getData(city);
    if (weatherData) {
        console.log(weatherData);
        document.querySelector('.country-txt').innerText = weatherData.name;  // Update city name
        document.querySelector('.temp-txt').innerText = `${weatherData.main.temp} ℃`;  // Update temperature
        document.querySelector('.condition').innerText = weatherData.weather[0].description;  // Update condition
        document.querySelector('.humi-value').innerText = `${weatherData.main.humidity}%`;  // Update humidity
        document.querySelector('.wind-value').innerText = `${weatherData.wind.speed} m/s`;  // Update wind speed

        // Hide the initial 'Search City' section and show the weather info
        document.querySelector('.search-city').style.display = 'none';
        document.querySelector('.weather-info').style.display = 'block';
    }
}

// Event listener for the search button
document.querySelector('.search-btn').addEventListener('click', function () {
    let city = document.querySelector('.city').value.trim();  // Get the input value and remove spaces
    if (city) {
        updateWeatherInfo(city);  // Fetch and display weather info for the city
    }
});
