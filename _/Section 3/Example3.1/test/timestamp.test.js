const timeStampMiddleware = require("../middleware/timestamp");
const moment = require("moment");
const expect = require("chai").expect;

describe("Timestamp middleware", () => {
    it("should include a timestamp in the request", () => {
        var req = {};
        timeStampMiddleware(req, {}, () => {
            expect(req.timestamp).to.be.ok;
            expect(moment(req.timestamp).year()).to.equal(moment().year());
            expect(moment(req.timestamp).month()).to.equal(moment().month());
            expect(moment(req.timestamp).date()).to.equal(moment().date());
            expect(moment(req.timestamp).hour()).to.equal(moment().hour());
            expect(moment(req.timestamp).minute()).to.equal(moment().minute());
        });
    });
});