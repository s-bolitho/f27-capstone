const express = require('express');
const path = require('path');
const { resourceLimits } = require('worker_threads');
require("dotenv").config()
const cors = require("cors")


const app = express();

app.use(express.json())
app.use(cors())

//destructuring controller functions
//writing an obj backwards
const {register} = require('./controller')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.css"))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.js"))
});

app.post('/register', register)

const port = process.env.PORT || 4004;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});