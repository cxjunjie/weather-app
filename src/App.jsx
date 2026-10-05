import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import SearchHistory from "./components/SearchHistory";
import { getWeather } from "./services/weatherApi";
import ErrorMessage from "./components/ErrorMessage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem("weatherSearchHistory");

        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("weatherSearchHistory", JSON.stringify(history));
    }, [history]);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    function handleThemeToggle() {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    }

    async function handleSearch({ city, country }) {
        if (!city && !country) {
            setError("Please enter a city and country.");
            return;
        }

        if (!city) {
            setError("Please enter a city.");
            return;
        }

        if (!country) {
            setError("Please enter a country.");
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

            setHistory((currentHistory) => {
                const filteredHistory = currentHistory.filter(
                    (item) =>
                        !(
                            item.city.toLowerCase() ===
                                data.name.toLowerCase() &&
                            item.country.toLowerCase() ===
                                data.sys.country.toLowerCase()
                        )
                );

                return [newHistoryItem, ...filteredHistory];
            });
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

            <ThemeToggle theme={theme} onToggle={handleThemeToggle} />

            <SearchForm
                onSearch={handleSearch}
                onClear={handleClear}
                loading={loading}
            />

            <ErrorMessage message={error} />

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
