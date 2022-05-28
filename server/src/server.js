const http = require("http");
const app = require("./app");
const dotenv = require('dotenv')
const dbConnect = require('./config/dbConnect');

//load dotenv file
dotenv.config();

//db connections 
dbConnect();

const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, console.log(`server is running on port ${PORT}`));