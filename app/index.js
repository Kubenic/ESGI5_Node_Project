const express = require('express');
const promiseRouter = require('express-promise-router');
const bodyParser = require('body-parser');
const api = require('./api');
const port = 80;

const router = promiseRouter();

const app = express()
    .use(bodyParser.json())
    .use(router);

api(router);

app.use((err, req, res, next) => {
    if (err) {
        res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
    } else {
        next();
    }
});

const server = app.listen(port, () => {
    console.log('App listening at port %s', port);
});