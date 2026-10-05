function WeatherCard({ weather }) {
    const temperature = Math.round(weather.main.temp);
    const tempMin = Math.round(weather.main.temp_min);
    const tempMax = Math.round(weather.main.temp_max);

    return (
        <section className="weather-card">
            <div className="weather-card__main">
                <div>
                    <p className="weather-card__label">Today&apos;s Weather</p>
                    <h2 className="weather-card__temperature">
                        {temperature}°C
                    </h2>
                    <p className="weather-card__range">
                        H: {tempMax}°C L: {tempMin}°C
                    </p>
                </div>

                <div className="weather-card__footer">
                    <strong>
                        {weather.name}, {weather.sys.country}
                    </strong>
                    <span>
                        {new Date().toLocaleString("en-SG", {
                            dateStyle: "medium",
                            timeStyle: "short",
                        })}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default WeatherCard;
