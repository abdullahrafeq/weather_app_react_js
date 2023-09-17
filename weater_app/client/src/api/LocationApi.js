export default function LocationApi(inputValue) {
    return fetch(`http://localhost:5000/location/${inputValue}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        const [{display_name: locationName, lat, lon}] = data; //returns the needed data
        //console.log(locationName);
        return {locationName, lat, lon};
    })
    .catch(error => {
        console.log("Error while fetching location: " + error);
        //throws error so any 
        //function that calles 
        //this function gets aware of this error
        throw error; 
    })
}