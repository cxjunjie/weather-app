function ThemeToggle({ theme, onToggle }) {
    return (
        <button type="button" onClick={onToggle}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
}

export default ThemeToggle;
