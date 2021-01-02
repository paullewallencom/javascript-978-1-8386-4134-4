import {app} from '../app';

describe("App: ", () => {
    before(done => {
        app.created().then(done);
    });

    it("should load users automatically", done => {

    });

    it("should delete a user when calling delete", done => {
        
    });
});