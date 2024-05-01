// getting the port from .env file
const dotenv = require("dotenv");
// doing just the thing what do says
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
};
