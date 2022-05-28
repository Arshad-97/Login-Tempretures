const express = require('express');
const { registerUser } = require('../controllers/userController.js');

const userRoute = express.Router();

userRoute.post("/register", registerUser);

module.exports = userRoute ;