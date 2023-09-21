import './Search.css';
import React, {useState} from 'react';
import getWeather from '../functions/getWeather';

function Search({setWeatherData, setWeekDay}) {
    let [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault(); // Prevent the form to submitt
            getWeather(inputValue, setWeatherData, setWeekDay);
            setInputValue("");
        }
    };

    return (
    <header>
        <form>
            <input 
                readOnly={false}
                placeholder="Search" 
                className="search-icon" 
                type="text" 
                id="search" 
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
            >
            </input>
            <button type="button" id="btn" onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
    );
}
export default Search;