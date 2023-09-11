const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());


app.get("/api", (req, res) => {
    res.json({"users": ["User 1"]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})