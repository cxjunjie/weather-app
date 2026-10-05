import { formatDate } from "../utils/formatDate";

function SearchHistory({ history, onSearchAgain, onDelete }) {
    if (history.length === 0) {
        return null;
    }

    return (
        <section className="search-history">
            <h2>Search History</h2>

            {history.map((item) => (
                <div className="search-history__item" key={item.id}>
                    <div className="search-history__details">
                        <span>
                            {item.city}, {item.country}
                        </span>
                        <span>{formatDate(item.searchedAt)}</span>
                    </div>

                    <div className="search-history__actions">
                        <button
                            type="button"
                            onClick={() => onSearchAgain(item)}
                        >
                            Search Again
                        </button>
                        <button type="button" onClick={() => onDelete(item.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default SearchHistory;
