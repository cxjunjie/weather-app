import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import SearchHistory from "./components/SearchHistory";
import { getWeather } from "./services/weatherApi";

function App() {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem("weatherSearchHistory");

        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    useEffect(() => {
        localStorage.setItem("weatherSearchHistory", JSON.stringify(history));
    }, [history]);

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

            const newHistoryItem = {
                id: crypto.randomUUID(),
                city: data.name,
                country: data.sys.country,
                searchedAt: new Date().toISOString(),
            };

            setHistory((currentHistory) => [newHistoryItem, ...currentHistory]);
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

    function handleSearchAgain(item) {
        handleSearch({
            city: item.city,
            country: item.country,
        });
    }

    function handleDelete(id) {
        setHistory((currentHistory) =>
            currentHistory.filter((item) => item.id !== id)
        );
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

            <SearchHistory
                history={history}
                onSearchAgain={handleSearchAgain}
                onDelete={handleDelete}
            />
        </main>
    );
}

export default App;
