const express = require('express');
const { storeTempreture, fetchTempreture } = require('../controllers/tempretureController');

const tempretureRoute = express.Router();

tempretureRoute.post("/store", storeTempreture);
tempretureRoute.get("/", fetchTempreture);

module.exports = tempretureRoute ;