import { Search, Trash2 } from "lucide-react";
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
                        <strong>
                            {item.city}, {item.country}
                        </strong>

                        <span>{formatDate(item.searchedAt)}</span>
                    </div>

                    <div className="search-history__actions">
                        <button
                            type="button"
                            className="icon-button"
                            onClick={() => onSearchAgain(item)}
                            aria-label={`Search ${item.city} again`}
                            title="Search again"
                        >
                            <Search size={18} />
                        </button>

                        <button
                            type="button"
                            className="icon-button"
                            onClick={() => onDelete(item.id)}
                            aria-label={`Delete ${item.city} from history`}
                            title="Delete"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default SearchHistory;
