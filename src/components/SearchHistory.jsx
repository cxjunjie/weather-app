function SearchHistory({ history, onSearchAgain, onDelete }) {
    if (history.length === 0) {
        return null;
    }

    return (
        <section>
            <h2>Search History</h2>

            {history.map((item) => (
                <div key={item.id}>
                    <span>
                        {item.city}, {item.country}
                    </span>

                    <button type="button" onClick={() => onSearchAgain(item)}>
                        Search Again
                    </button>

                    <button type="button" onClick={() => onDelete(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </section>
    );
}

export default SearchHistory;
