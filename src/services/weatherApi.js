const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city, country) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const query = `${city},${country}`;

    const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(query)}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("City or country not found.");
        }

        throw new Error("Unable to fetch weather data.");
    }

    return response.json();
}
