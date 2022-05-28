const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')

//middlewares
app.use(express.json());

//user routes
app.use('/api/user', userRoute);

//error handlers
app.use(notFound);
app.use(errorHandler);


module.exports = app;