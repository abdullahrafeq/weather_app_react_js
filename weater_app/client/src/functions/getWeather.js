import LocationApi from '../api/LocationApi';
import fetchWeatherData from "./fetchWeatherData";

export default function getWeather(inputValue, setWeatherData, setWeekDay) {
    LocationApi(inputValue)
    .then(locationData => {
        const {locationName, lat, lon} = locationData;
        fetchWeatherData(setWeatherData, setWeekDay, locationName, lat, lon);
    })
    .catch(error => console.log(error))
}