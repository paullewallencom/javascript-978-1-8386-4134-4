const express = require("express");
const bodyParser = require("body-parser");

const UsersController = require("./controllers/users-controller");

const app = express();
app.use(bodyParser.json());

app.use("/api/users", UsersController);

module.exports = app;