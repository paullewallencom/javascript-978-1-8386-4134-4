const app = require("../../app");
const request = require("supertest");
const expect = require("chai").expect;

process.env.USE_MOCKS = true;

describe("Users Controller", () => {
    it("should initially fetch an empty array", done => {
        request(app).get("/api/users").expect(200).then(response => {
            expect(response).to.be.ok;
            expect(response.body).to.be.ok;
            expect(response.body).to.be.empty;
            done();
        });
    });

    it("should add a user to the database", done => {
        request(app).post("/api/users").send({
            name: "TEST USER",
            website: "testuser.com",
            phone: "123456789"
        }).expect(200).then(response => {
            expect(response).to.be.ok;
            expect(response.body).to.be.ok;
            expect(response.body.name).to.equal("TEST USER");
            done();
        });
    });
});
