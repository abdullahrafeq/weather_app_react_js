export default function setIcon(weathercode, isDay) {
    let weather;
    let weatherDescription;
    weathercodes.map(code => {
        if (code.codes.includes(weathercode)) {
            if (isDay === 0) {
                code.iconName = code.iconName.replace("sun", "moon");
            } else {
                code.iconName = code.iconName.replace("moon", "sun");
            }
            weather = code.iconName;
            weatherDescription = code.description;
            return;
        }
    })
    return [weather, weatherDescription];
}

const clear = {
    codes: [0],
    iconName: "sun",
    description: "Clear"
};

const partlyClear = {
    codes: [1, 2],
    iconName: "cloud-sun",
    description: "Partly clear"
};

const overcast = {
    codes: [3],
    iconName: "cloud",
    description: "Cloudy"
};

const smog = {
    codes: [45, 48],
    iconName: "smog",
    description: "Overcast"
};

const lightRain = {
    codes: [51, 53, 56, 61, 63, 66, 80, 81],
    iconName: "cloud-rain",
    description: "Rainy"
};

const heavyRain = {
    codes: [55, 57, 65, 67, 82],
    iconName: "cloud-showers-heavy",
    description: "Rain showers"
};

const snow = {
    codes: [71, 73, 75, 77, 85, 86],
    iconName: "snowflake",
    description: "Snowy"
};

const bolt = {
    codes: [95, 96, 99],
    iconName: "cloud-bolt",
    description: "Thunders"
};

const weathercodes = [
    clear, 
    partlyClear, 
    overcast, 
    smog, 
    lightRain,
    heavyRain, 
    snow, 
    bolt
];