const app = require("./app");
const mongo = require("./models/mongo-connect");
const PORT = process.env.PORT || 3000;

mongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        if (process.env.USE_MOCKS) {
            console.log("Using Mock Services");
        }
    });
})
