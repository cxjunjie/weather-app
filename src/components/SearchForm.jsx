import { useState } from "react";

function SearchForm({ onSearch, onClear, loading }) {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        console.log(city, country);

        onSearch({
            city: city.trim(),
            country: country.trim(),
        });
    }

    function handleClear() {
        setCity("");
        setCountry("");
        onClear();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="e.g. Singapore"
                />
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <input
                    id="country"
                    type="text"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    placeholder="e.g. Singapore"
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>

            <button type="button" onClick={handleClear}>
                Clear
            </button>
        </form>
    );
}

export default SearchForm;
