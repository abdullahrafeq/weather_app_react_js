import './Search.css';

function Search() {
    return (
    <header>
        <form>
            <input placeholder="Search" className="search-icon" type="text" id="search" value=""></input>
            <button id="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
    );
}

export default Search;