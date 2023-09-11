const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

app.get("/location", (req, res) => {
    fetch("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=Sverige")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(error => console.log(error))
    
})

app.listen(5000, () => {console.log("Server started on port 5000")})