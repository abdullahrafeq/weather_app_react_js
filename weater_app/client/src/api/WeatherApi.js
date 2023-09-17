export default function WeatherApi(lat, lon) {
    return fetch(`http://localhost:5000/weather/${lat}/${lon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let a = parseCurrentWeather(data);
        let b = parseDaily(data);
        let c = parseHourly(data)
        return {a, b, c};
    })
    .catch(error => {
        console.log("Error while fetching weather: " + error);
        throw error;
        //throws error so any 
        //function that calles 
        //this function gets aware of this error
    })
}

function parseCurrentWeather({current_weather}) {
    const {temperature, windspeed, weathercode: currentWeatherCode, is_day} = current_weather;
    return {temperature, windspeed, currentWeatherCode, is_day};
}

function parseDaily({daily}) {
    const {
        sunrise: [currentSunrise], 
        sunset: [currentSunset], 
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
    } = daily;

    return {currentSunrise, currentSunset, maxTemp, minTemp};
}

function parseHourly({hourly: {is_day, rain, temperature_2m, time, weathercode}, utc_offset_seconds}) {

    console.log("seconds offset: " + utc_offset_seconds);
    let utcDate = new Date();
    let browserOffset = utcDate.getTimezoneOffset() * 60; //offset in seconds
    utcDate.setSeconds(utcDate.getSeconds()+browserOffset);
    console.log("browser offset: " + browserOffset);
    console.log("utc date: " +  utcDate.toISOString());
    
    utcDate.setSeconds(utcDate.getSeconds()+utc_offset_seconds); //setting offset to time in searched location
    console.log("utc date2: " +  utcDate.toISOString());

    let currentHour = utcDate.getHours();
    let hours = [];
    let temps = [];
    let weathercodeArr = [];
    let isDayArr = [];
    let currentRain;
    let i = 0; 
    let count = 0;
    
    while (count < 13) {
        //2023-07-21T00:00
        if (time[i].substring(time[i].length-5, time[i].length-3) === (currentHour < 10 ? "0" + currentHour : currentHour.toString()) && count === 0) {
            hours.push(time[i]);
            temps.push(temperature_2m[i]);
            weathercodeArr.push(weathercode[i]);
            isDayArr.push(is_day[i]);
            currentRain = rain[i];
            count++;
        } else if (count > 0) {
            hours.push(time[i]);
            temps.push(temperature_2m[i]);
            weathercodeArr.push(weathercode[i]);
            isDayArr.push(is_day[i]);
            count++;
        }
        i++;
    }

    return {isDayArr, currentRain, temps, hours, weathercodeArr};
}