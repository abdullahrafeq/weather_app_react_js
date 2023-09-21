export default function currentLocationApi(lon, lat) {
    return fetch(`http://localhost:5000/currentLocation/${lon}/${lat}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const {address: {Match_addr: locationName}, location: {x: lon, y: lat}} = data;
        console.log(locationName);
        return {locationName, lon, lat};
    })
    .catch(error => {
        console.log("Error while fetching location: " + error);
        //throws error so any 
        //function that calles 
        //this function gets aware of this error
        throw error; 
    })
}