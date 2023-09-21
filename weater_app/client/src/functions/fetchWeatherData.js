import WeatherApi from "../api/WeatherApi";
import getWeekDay from '../api/getWeekDay';

export default function fetchWeatherData(setWeatherData, setWeekDay, locationName, lat, lon) {
    WeatherApi(locationName, lat, lon)
    .then(weatherData => {
        setWeatherData(weatherData);
        console.log(weatherData);
        let {timezone} = weatherData;
        let weekDay = getWeekDay(timezone);
        setWeekDay(weekDay);
    })
    .catch(error => console.log(error))
}