"use strict";

require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/slack/game', require('../slackgameserver'));
app.get('/slack/test', (req, res) => {
    res.send("Test");
});

app.listen(process.env.SERVER_PORT, function () {
    console.log('Listening on ', this.address());
});
