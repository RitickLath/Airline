// getting the port from .env file
// we have not implemented these logics in index.js
// as index.js is responsible for important code not environment variables 
const dotenv = require("dotenv");
// doing just the thing what do says
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
};
