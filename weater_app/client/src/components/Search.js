import './Search.css';
import React, {useState} from 'react';
import LocationApi from '../api/LocationApi';
import WeatherApi from '../api/WeatherApi';
import TranslateWeekDay from '../api/TranslateWeekDay';

function Search({setWeatherData, setWeekDay}) {
    let [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
 
    const getWeather = () => {
        LocationApi(inputValue)
        .then(locationData => {
            const {locationName, lat, lon} = locationData;
            return WeatherApi(locationName, lat, lon);
        })
        .then(weatherData => {
            setWeatherData(weatherData);
            return TranslateWeekDay();
        })
        .then(translatedText => {
            let {translation} = translatedText;
            console.log(translation);
            setWeekDay(translation);
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