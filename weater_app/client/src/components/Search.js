import './Search.css';
import React, {useState} from 'react';
import LocationApi from '../api/LocationApi';
import WeatherApi from '../api/WeatherApi';

function Search({setWeatherData}) {
    let [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
 
    const getWeather = () => {
        LocationApi(inputValue)
        .then(locationData => {
            const {lat, lon} = locationData;
            return WeatherApi(lat, lon);
        })
        .then(weatherData => {
            setWeatherData(weatherData);
        })
        .catch(error => console.log(error))
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
            <button type="button" id="btn" onClick={getWeather}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
    );
}
export default Search;