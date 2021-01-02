const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("./models/mongo-connect");
const PORT = process.env.PORT || 3000;

const UsersController = require("./controllers/users-controller");

const app = express();
app.use(bodyParser.json());

app.use("/api/users", UsersController);

mongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})
