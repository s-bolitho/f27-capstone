const express = require('express');
const path = require('path');
const { resourceLimits } = require('worker_threads');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.css"))
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.js"))
});

const port = process.env.PORT || 4004;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});