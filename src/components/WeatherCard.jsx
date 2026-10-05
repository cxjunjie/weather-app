function WeatherCard({ weather }) {
    return (
        <section>
            <h2>
                {weather.name}, {weather.sys.country}
            </h2>

            <p>{Math.round(weather.main.temp)}°C</p>

            <p>{weather.weather[0].description}</p>

            <p>Humidity: {weather.main.humidity}%</p>
        </section>
    );
}

export default WeatherCard;
