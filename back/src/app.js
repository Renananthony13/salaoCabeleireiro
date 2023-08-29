const express = require('express');
const app = express();
const router = require('./routes/router.js')
const cors = require('cors');
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(router)

app.use(express.static('public'))



app.use(cors())

module.exports = app

