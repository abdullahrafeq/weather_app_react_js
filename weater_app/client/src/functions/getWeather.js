import LocationApi from '../api/LocationApi';
import WeatherApi from '../api/WeatherApi';
import TranslateWeekDay from '../api/TranslateWeekDay';

export default function getWeather(inputValue, setWeatherData, setWeekDay) {
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