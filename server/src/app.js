const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute.js')

//middlewares
app.use(express.json());

//user routes
app.use('/api/user', userRoute);

module.exports = app;