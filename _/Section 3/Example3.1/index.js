const express = require("express");
const bodyParser = require("body-parser");

const UserController = require("./user-controller");
const SettingsController = require("./settings-controller");

const timestampMiddleware = require("./middleware/timestamp");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(timestampMiddleware);

app.use("user", UserController);
app.use("settings", SettingsController);
app.get("/api/test", (req, res, next) => {
    res.send({
        test: true,
        timestamp: req.timestamp
    });
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});