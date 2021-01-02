const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const UsersController = require("./controllers/users-controller");

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client`))
app.use("/api/users", UsersController);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

module.exports = app;