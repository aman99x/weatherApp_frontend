import React from 'react';

const WeatherList = ({ weatherData, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {weatherData.map((weather) => (
        <li key={weather._id}>
          {weather.location} - {weather.temperature}°C ({weather.description})
        </li>
      ))}
    </ul>
  );
};

export default WeatherList;
