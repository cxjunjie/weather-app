import cloudImage from "../assets/cloud.png";
import sunImage from "../assets/sun.png";

function WeatherCard({ weather }) {
    const temperature = Math.round(weather.main.temp);
    const tempMin = Math.round(weather.main.temp_min);
    const tempMax = Math.round(weather.main.temp_max);

    const weatherMain = weather.weather[0].main.toLowerCase();

    const weatherImage = weatherMain.includes("clear") ? sunImage : cloudImage;

    return (
        <section className="weather-card">
            <img
                className="weather-card__image"
                src={weatherImage}
                alt={weather.weather[0].description}
            />

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

                <div className="weather-card__condition">
                    <p className="weather-card__description">
                        {weather.weather[0].description}
                    </p>

                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
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
        </section>
    );
}

export default WeatherCard;
