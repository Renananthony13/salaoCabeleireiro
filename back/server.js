const express = require('express')
const app = require('./src/app.js');


const port = process.env.PORT || 8080

app.listen(port, (req, res) => console.log(`Server iniciado na porta: ${port}`))
