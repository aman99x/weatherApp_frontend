import React, { useState } from 'react';

const WeatherForm = ({ onAddWeather }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWeather(location);
    setLocation(''); // Clear the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a location"
      />
      <button type="submit">Add Weather</button>
    </form>
  );
};
export default WeatherForm;
