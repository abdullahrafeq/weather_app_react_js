import getCurrentCoordinates from "./getCurrentCoordinates";
import currentLocationApi from "../api/currentLocationApi";
import fetchWeatherData from "./fetchWeatherData";

export default function getCurrentLocation(setWeatherData, setWeekDay) {
    getCurrentCoordinates()
    .then(currentCoordinates => {
        const lon = currentCoordinates[0];
        const lat = currentCoordinates[1];
        return currentLocationApi(lon, lat);
    })
    .then(locationData => {
        const {locationName, lon, lat} = locationData;
        fetchWeatherData(setWeatherData, setWeekDay, locationName, lat, lon);
    })
    .catch(error => console.log(error))
}