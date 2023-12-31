export default function changeRightSide(data, RightData) {
    if (data && data.a && data.b) {
        let {
            a: {windspeed}, 
            b: {currentSunrise, currentSunset, maxTemp, minTemp},
            c: {currentRain}
        } = data;
        currentSunrise = makeSubstring(currentSunrise);
        currentSunset= makeSubstring(currentSunset);
        const values = [maxTemp + '\u00b0', windspeed + " m/s", currentSunrise, minTemp + '\u00b0', currentRain + " mm", currentSunset];
        
        RightData.forEach((element, index) => {
            element.value = values[index];
        });
    }
}

function makeSubstring(string) {
    return string.substring(string.length-5, string.length);
}