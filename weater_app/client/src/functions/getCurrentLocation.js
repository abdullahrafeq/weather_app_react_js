import getCurrentCoordinates from "./getCurrentCoordinates";
import currentLocationApi from "../api/currentLocationApi";

export default function getCurrentLocation() {
    getCurrentCoordinates()
    .then(currentCoordinates => {
        console.log(currentCoordinates);
        const lon = currentCoordinates[0];
        const lat = currentCoordinates[1];
        return currentLocationApi(lon, lat);
    })
    .catch(error => console.log(error))
}