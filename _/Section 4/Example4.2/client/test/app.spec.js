import {app} from '../app';
import { UsersService } from '../services/users-service';

const App = app(new UsersService());

describe("App: ", () => {
    before(done => {
        App.created().then(done);
    });

    it("should load users automatically", done => {

    });

    it("should delete a user when calling delete", done => {
        
    });
});