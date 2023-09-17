const express = require('express');
const router = express.Router(); 

router.get("/:inputLocation", (req, res) => {
    const inputLocation = req.params.inputLocation;    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${inputLocation}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        res.json(data);
    })
    .catch(error => console.log(error))    
})


module.exports = router;