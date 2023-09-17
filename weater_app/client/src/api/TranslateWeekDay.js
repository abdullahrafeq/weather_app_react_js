export default function TranslateWeekDay() {
    let locationWeekday = new Date().toLocaleString(
        'default', {weekday: 'long'}
    );
    locationWeekday = locationWeekday[0].toLocaleUpperCase() + locationWeekday.slice(1);
    console.log(locationWeekday);

    return fetch(`http://localhost:5000/weekday/${locationWeekday}`)
    .then(response => response.json())
    .then(translatedText => {
        locationWeekday = translatedText;
        console.log(locationWeekday);
        return locationWeekday;
    })
    .catch(error => console.log("Translation error: " + error));
}