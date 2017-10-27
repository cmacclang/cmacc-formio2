const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("", (req, res) => {
    if (!req.body) return res.sendStatus(400)

    console.log(req.body);
    res.status(200).send();
})

module.exports = app
