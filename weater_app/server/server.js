const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const currentLocationRouter = require('./routes/currentLocation');
const locationRouter = require('./routes/location');
const weatherRouter = require('./routes/weather');
const translateRouter = require('./routes/translate');

app.use('/currentLocation', currentLocationRouter);
app.use('/location', locationRouter);
app.use('/weather', weatherRouter);
app.use('/translate', translateRouter);

app.listen(5000, () => {console.log("Server started on port 5000")});