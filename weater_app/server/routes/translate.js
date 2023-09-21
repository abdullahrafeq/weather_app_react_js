const express = require('express');
const router = express.Router();

router.get("/:location", (req, res) => {
    const encodedWeekday = req.params.locationWeekday;
    const weekday = decodeURIComponent(encodedWeekday); // Decode the URL parameter
    const translateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${weekday}`;

    fetch(translateUrl)
    .then(response => response.json())
    .then(translatedText => {
      if (Array.isArray(translatedText) && translatedText[0] && Array.isArray(translatedText[0][0])) {
        const translation = translatedText[0][0][0];
        res.json({translation});
      } else {
        res.status(400).json({ error: "Translation failed." }); // Send an error response
      }
    })
    .catch(error => {
      console.error("Translation error:", error);
      res.status(500).json({ error: "Translation error." });
    });
});

module.exports = router;