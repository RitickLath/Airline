const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig"); // port comes from serverconfig

const setupAndStartServer = (async = () => {
  const app = express();
  console.log(PORT);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`App listening at PORT: ${PORT}`);
  });
});

setupAndStartServer();
