const axios = require("axios");
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const faker = require("faker");

let user;
let allUsers;

(async() => {
    const serverRoot = "http://localhost:3000/api/users"

    // First, add a user using the API
    user = (await axios.default.post(serverRoot, {
        name: "Nightmare User",
        username: "nightmareuser",
        email: "nightmareuser@gmail.com"
    })).data;
    console.log("New user: ", user);

    allUsers = (await axios.default.get(serverRoot)).data;

    // Now navigate to the home page
    return await nightmare.goto("http://localhost:3000/")
                            .wait(3000)
                            .evaluate(allUsers => document.querySelectorAll("tr").length == allUsers.length - 1, allUsers)
                            .click(`#row${user._id} button`)
                            .wait(3000)
                            .refresh()
                            .wait(3000)
                            .type("#name", faker.name.firstName() + " " + faker.name.lastName())
                            .type("#username", faker.name.firstName())
                            .type("#email", faker.internet.email())
                            .click("#add")
                            .refresh()
                            .wait(3000)
                            .end();
})();