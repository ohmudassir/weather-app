import { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError('');
    setWeatherData(null);

    // ⛅️ MOCK DATA
    const mockData = {
      name: city,
      sys: { country: 'PK' },
      main: { temp: 32 },
      weather: [
        {
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    };

    setTimeout(() => {
      setWeatherData(mockData);
      setLoading(false);
    }, 1000); // Simulates API delay
  };

  const getBackgroundClass = () => {
    if (!weatherData) return 'default';

    const main = weatherData.weather[0].main.toLowerCase();

    if (main.includes('clear')) return 'sunny';
    if (main.includes('cloud')) return 'cloudy';
    if (main.includes('rain')) return 'rainy';
    if (main.includes('snow')) return 'snowy';

    return 'default';
  };

  return (
    <main className={getBackgroundClass()}>
      <h1>Weather App</h1>
      <p>Welcome to the Weather App! Here you can find the latest weather updates.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>{weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </main>
  );
};

export default App;
