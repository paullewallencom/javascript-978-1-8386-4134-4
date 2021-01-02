const axios = require("axios");
const Nightmare = require("nightmare");
const nightmare = Nightmare({show: true});

let user;
let allUsers;

(async() => {
    const serverRoot = "http://localhost:3000/api/users";

    // First add a user using the API
    user = (await axios.default.post(serverRoot, {
        name: "Nightmare User",
        username: "nightmareuser",
        email: "nightmareuser@gmail.com"
    })).data;

    allUsers = (await axios.default.get(serverRoot)).data;

    // Now navigate home and test the UI
    let status = await nightmare.goto("http://localhost:3000")
                            .wait(3000)
                            .evaluate(allUsers => document.querySelectorAll("tr").length == allUsers.length - 1, allUsers)
                            .click(`#row${user._id} button`)
                            .wait(3000)
                            .refresh()
                            .wait(3000)
                            .evaluate((user) => {
                                if (document.querySelector(`#row${user._id}`)) {
                                    return "test failed";
                                }
                                else {
                                    return "test passed";
                                }
                            }, user)
                            .end();
    console.log(status);

})();