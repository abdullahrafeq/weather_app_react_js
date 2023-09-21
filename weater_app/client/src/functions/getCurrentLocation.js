import getCurrentCoordinates from "./getCurrentCoordinates";
import currentLocationApi from "../api/currentLocationApi";
import WeatherApi from "../api/WeatherApi";
import TranslateWeekDay from '../api/TranslateWeekDay';

export default function getCurrentLocation(setWeatherData, setWeekDay) {
    getCurrentCoordinates()
    .then(currentCoordinates => {
        console.log(currentCoordinates);
        const lon = currentCoordinates[0];
        const lat = currentCoordinates[1];
        return currentLocationApi(lon, lat);
    })
    .then(locationData => {
        const {locationName, lon, lat} = locationData;
        return WeatherApi(locationName, lat, lon);
    })
    .then(weatherData => {
        setWeatherData(weatherData);
        console.log(weatherData);
        return TranslateWeekDay();
    })
    .then(translatedText => {
        let {translation} = translatedText;
        console.log(translation);
        setWeekDay(translation);
    })
    .catch(error => console.log(error))
}