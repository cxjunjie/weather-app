const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city, country) {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    if (!apiKey) {
        throw new Error("Weather API key is missing.");
    }

    const query = `${city},${country}`;

    try {
        const response = await fetch(
            `${BASE_URL}?q=${encodeURIComponent(query)}&appid=${apiKey}&units=metric`
        );

        if (response.status === 404) {
            throw new Error(
                "Location not found. Please check the city and country."
            );
        }

        if (response.status === 401) {
            throw new Error("Unable to authenticate with the weather service.");
        }

        if (!response.ok) {
            throw new Error(
                "Unable to retrieve weather information. Please try again."
            );
        }

        return await response.json();
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error(
                "Network error. Please check your connection and try again.",
                { cause: error }
            );
        }

        throw error;
    }
}
