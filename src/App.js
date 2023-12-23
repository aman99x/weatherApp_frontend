import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherList from './components/WeatherList';
import WeatherForm from './components/WeatherForm';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');

  const fetchWeather = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/crud/weather');
      setWeatherData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addWeather = async (location) => {
    try {
      await axios.post('http://localhost:5000/api/crud/weather', { location });
      fetchWeather(); 
    } catch (error) {
      setError(error.message);
    }
  };


  const searchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/crud/weather/${searchLocation}`);
      setWeatherData([response.data]); 
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
    <h1>Weather App</h1>
    <div>
      <WeatherForm onAddWeather={addWeather} />
      <WeatherList
        weatherData={weatherData}
        isLoading={isLoading}
        error={error}
      />
      <input
        type="text"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        placeholder="Search location"
      />
      <button onClick={searchWeather}>Search</button>
    </div>
    </>
  );
};

export default App;
