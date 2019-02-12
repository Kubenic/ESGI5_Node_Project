const express = require('express');
const app = express();
const port = 80;

app.listen(port, () => {
    console.log('app started');
});

app.get('/', (req, res) => {
    res.send('hello world!');
});