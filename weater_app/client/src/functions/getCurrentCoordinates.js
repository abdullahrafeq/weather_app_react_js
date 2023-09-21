export default function getCurrentCoordinates() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                try {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    resolve([lon, lat]);
                } catch (error) {
                    reject(error);
                }
            }, (error) => {
                console.log("Geolocation error: " + error.message);
                reject(error); // Reject the Promise in case of a geolocation error
            }
            );
        } else {
            console.log("Geolocation is not supported in this browser.");
            reject(new Error("Geolocation not supported"));
        }
    });
}