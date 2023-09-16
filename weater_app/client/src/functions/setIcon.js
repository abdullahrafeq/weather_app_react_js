export default function setIcon(weathercode, isDay) {
    let weather;
    weathercodes.map(code => {
        if (code.codes.includes(weathercode)) {
            if (code.description.includes("sun") && isDay === 0) {
                code.description = code.description.replace("sun", "moon");
            }
            weather = code.description;
            return;
        }
    })
    return weather;
}

const clear = {
    codes: [0],
    description: "sun"
};

const partlyClear = {
    codes: [1, 2],
    description: "cloud-sun"
};

const overcast = {
    codes: [3],
    description: "cloud"
};

const smog = {
    codes: [45, 48],
    description: "smog"
};

const lightRain = {
    codes: [51, 53, 56, 61, 63, 66, 80, 81],
    description: "cloud-rain"
};

const heavyRain = {
    codes: [55, 57, 65, 67, 82],
    description: "cloud-showers-heavy"
};

const snow = {
    codes: [71, 73, 75, 77, 85, 86],
    description: "snowflake"
};

const bolt = {
    codes: [95, 96, 99],
    description: "cloud-bolt"
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