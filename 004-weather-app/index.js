
const API_KEY = 'API_KEY' 

document.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const location = document.getElementById('location-input').value;

        if (!location) {
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === '404') {
                    return;
                }

                let weatherIconClasses = '';

                switch(json.weather[0].main) {
                    case 'Clear': 
                        weatherIconClasses = 'bx bx-sun';
                        break;

                    case 'Rain':
                        weatherIconClasses = 'bx bx-cloud-drizzle';
                        break;

                    case 'Snow':
                        weatherIconClasses = 'bx bx-cloud-snow';
                        break;

                    case 'Clouds':
                        weatherIconClasses = 'bx bx-cloud';
                        break;
                    
                }

                const temp = json.main.temp;
                document.getElementById('degrees').innerHTML = `${Math.round(temp)}°`;

                const humidity = json.main.humidity;
                document.getElementById('humidity').innerHTML = `${humidity}%`;

                const pressure = json.main.pressure;
                document.getElementById('pressure').innerHTML = `${pressure}hPa`;

                const wind = json.wind.speed;
                document.getElementById('wind').innerHTML = `${Math.round(wind)}km/h`;

                document.getElementById('weatherIcon').className = weatherIconClasses;

                document.getElementById('weather-container').style.height = '400px';

                document.getElementById('temperature').style.opacity = '1';
                document.getElementById('temperature').style.height = 'auto';
                document.getElementById('details').style.opacity = '1';
                document.getElementById('details').style.height = 'auto';
            })

    }
});