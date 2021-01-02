const app = require("../../index");
const UserService = require("../../services/user-service");
const expect = require("chai").expect;
const assert = require("chai").assert;

const userService = new UserService();

describe("User Service: ", () => {
    describe("findAllWithAddress: ", () => {
        it("should fetch all users with a one line address", async() => {
            let users = await userService.findAllWithAddress();
            expect(users).to.be.ok;
            for(let user of users) {
                expect(typeof user.address == "string").to.be.true;
            }
        });
    });
});