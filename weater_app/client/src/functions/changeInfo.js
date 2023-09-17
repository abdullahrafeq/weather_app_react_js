export default function changeInfo(data, InfoData, weekDay) {
    if (data && data.locationName) {        
        let {locationName} = data;
        InfoData[0].location = locationName;
        InfoData[0].weekDay = weekDay;
    }
}