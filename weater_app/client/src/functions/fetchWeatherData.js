import WeatherApi from "../api/WeatherApi";
import TranslateWeekDay from '../api/TranslateWeekDay';

export default function fetchWeatherData(setWeatherData, setWeekDay, locationName, lat, lon) {
    WeatherApi(locationName, lat, lon)
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