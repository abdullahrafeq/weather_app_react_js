const express = require('express');
const cors = require('cors');
const app = express();

app.use(cor+s());

app.get("/location/:inputLocation", (req, res) => {
    const inputLocation = req.params.inputLocation;    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${inputLocation}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(error => console.log(error))    
})

app.listen(5000, () => {console.log("Server started on port 5000")})