import './Search.css';
import React, {useState} from 'react';
import getWeather from '../functions/getWeather';

function Search({setWeatherData, setWeekDay}) {
    let [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleButtonClick = () => {
        getWeather(inputValue, setWeatherData, setWeekDay)
    }

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
                onChange={handleInputChange}>
            </input>
            <button type="button" id="btn" onClick={handleButtonClick}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
    );
}
export default Search;