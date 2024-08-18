const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const cors = require('cors');
const stripe= require('stripe')
('sk_test_51PomBKC8Av98MBvg11saI7cS2iqtcBqoZrzDp1dfEAReSofwso6LHN435YmpC5B7SnsnewlMcxoCVPc2Pn9J9wkN00DOuzVyr7')

//API

// - App config
const app= express();


// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send
('hello world'))

// - Listen Command
exports.api = functions.https.onRequest(app)