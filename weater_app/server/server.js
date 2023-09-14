const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const locationRouter = require('./routes/location');
const weatherRouter = require('./routes/weather');

app.use('/location', locationRouter);
app.use('/weather', weatherRouter);

app.listen(5000, () => {console.log("Server started on port 5000")});