const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const tempretureRoute = require('./routes/tempretureRoute');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

//middlewares
app.use(express.json());

//user routes
app.use('/api/user', userRoute);

//user routes
app.use('/api/tempreture', tempretureRoute);

//error handlers
app.use(notFound);
app.use(errorHandler);


module.exports = app;