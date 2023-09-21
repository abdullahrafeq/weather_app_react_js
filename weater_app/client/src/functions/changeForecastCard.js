import setIcon from '../functions/setIcon.js'

export default function changeForeCastCard(data, ForeCastData) {
    if (data && data.c) {
        //console.log(data)
        let {c:{isDayArr, hours, temps, weathercodeArr}} = data;
        ForeCastData.forEach((card, index) => {
            card.date = hours[index].substring(0, hours[index].length-6)
            card.time = hours[index].substring(hours[index].length-5, hours[index].length);
            card.icon = setIcon(weathercodeArr[index], isDayArr[index])[0];
            card.temperature = temps[index]+'\u00b0'; 
        })
    }
}