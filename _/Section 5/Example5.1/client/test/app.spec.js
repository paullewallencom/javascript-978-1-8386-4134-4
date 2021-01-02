import {app} from '../app';
import { UsersService } from './services/users-service.mock';
import {expect} from 'chai';

const App = app(new UsersService());

Object.keys(App.methods).forEach(key => App[key] = App.methods[key]);
Object.keys(App.data).forEach(key => App[key] = App.data[key]);

describe("App: ", () => {
    before(done => {
        App.created().then(done);
    });

    it("should load users automatically", done => {
        expect(App.users).to.be.ok;
        done();
    });

    it("should delete a user when calling delete", done => {
        App.remove(1).then(user => {
            expect(user).to.be.ok;
            expect(user.id).to.equal(1);
            expect(App.users).to.be.empty;
            done();
        });
    });
});