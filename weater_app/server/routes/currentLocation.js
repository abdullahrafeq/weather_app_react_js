const express = require('express');
const router = express.Router();

router.get("/:longitude/:latitude", (req, res) => {
    const lon = req.params.longitude;    
    const lat = req.params.latitude;
    fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${lon},${lat}`)
    .then(response => response.json())
    .then(data => {
        res.json(data);
    })
    .catch(error => console.log(error))    
})

module.exports = router;