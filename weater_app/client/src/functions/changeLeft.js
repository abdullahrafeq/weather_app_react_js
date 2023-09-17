import setIcon from '../functions/setIcon.js'

export default function(data, LeftData) {
    if (data && data.a) {
        let {a: {currentWeatherCode, is_day, temperature}} = data;
        LeftData[0].icon = setIcon(currentWeatherCode, is_day)[0];
        LeftData[0].temperature = temperature;
        LeftData[0].description = setIcon(currentWeatherCode, is_day)[1];
    }
}