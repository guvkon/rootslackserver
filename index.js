"use strict";

require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/slack', require('../slackgameserver'));

app.listen(process.env.SERVER_PORT, function () {
    console.log('Listening on ', this.address());
});
