import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudRain, faCloud, faSnowflake } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const latitude = 43.2630;
    const longitude = -2.9350;

    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
      .then(response => {
        setWeather(response.data.current);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  const getWeatherIcon = () => {
    if (weather) {
      const condition = weather.weathercode;
      if (condition >= 200 && condition < 600) {
        return <FontAwesomeIcon icon={faCloudRain} />;
      } else if (condition >= 600 && condition < 700) {
        return <FontAwesomeIcon icon={faSnowflake} />;
      } else if (condition >= 700 && condition < 800) {
        return <FontAwesomeIcon icon={faCloud} />;
      } else {
        return <FontAwesomeIcon icon={faSun} />;
      }
    }
    return null;
  };

  return (
    <div className="TopBar">
      <div className="Left">
        <h2>
          <span className="GreenText">News.</span> 
          <span className="RedText">Page.</span>
        </h2>
      </div>
      <div className="Right">
        <div className="WeatherWidget">
          {weather ? (
            <>
              <p>{getWeatherIcon()} Bilbao</p>
              <p>Temperature: {weather.temperature_2m} °C</p>
              <p>Wind Speed: {weather.wind_speed_10m} m/s</p>
            </>
          ) : 'Loading weather...'}
        </div>
      </div>
    </div>
  );
}

export default TopBar;


