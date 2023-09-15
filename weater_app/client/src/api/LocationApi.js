export function getLocation(inputValue) {
    return fetch(`http://localhost:5000/location/${inputValue}`)
    .then(response => response.json())
    .then(data => {
        return [{lat, lon}] = data; //returns the needed data
    })
    .catch(error => {
        console.log("Error while fetching location: " + error);
        throw error; 
        //throws error so any 
        //function that calles 
        //this function gets aware of this error
    })
}