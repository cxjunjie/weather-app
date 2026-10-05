import { useState } from "react";
import SearchForm from "./components/SearchForm";
import { getWeather } from "./services/weatherApi";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    async function handleSearch({ city, country }) {
        if (!city || !country) {
            setError("Please enter both city and country.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const data = await getWeather(city, country);

            setWeather(data);
        } catch (error) {
            setWeather(null);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function handleClear() {
        setWeather(null);
        setError("");
        console.log("Cleared");
    }

    return (
        <main>
            <h1>Today&apos;s Weather</h1>

            <SearchForm
                onSearch={handleSearch}
                onClear={handleClear}
                loading={loading}
            />

            {error && <p>{error}</p>}

            {weather && <WeatherCard weather={weather} />}
        </main>
    );
}

export default App;
