import { useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
    const [loading] = useState(false);

    function handleSearch(searchData) {
        console.log("Searching for:", searchData);
    }

    function handleClear() {
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
        </main>
    );
}

export default App;
