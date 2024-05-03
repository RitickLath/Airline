const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig"); // port comes from serverconfig
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = (async = () => {
  const app = express();
  console.log(PORT);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`App listening at PORT: ${PORT}`);
    // Implementing city repository creation

    const repo = new CityRepository();
    repo.createCity({ name: "New Delhi" });
  });
});

setupAndStartServer();
