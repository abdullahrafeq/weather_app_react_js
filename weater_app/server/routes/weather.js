const express = require('express');
const router = express.Router();

router.get("/:latitude/:longitude", (req, res) => {
    const lat = req.params.latitude;
    const lon = req.params.longitude;
    fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,snowfall,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum&current_weather=true&windspeed_unit=ms&timezone=auto&models=best_match`
    ).then(response => response.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
});

module.exports = router;