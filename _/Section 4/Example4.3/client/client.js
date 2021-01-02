import {app} from './app';
import { UsersService } from './services/users-service';

const App = app(new UsersService());

new Vue({
    el: "#app",
    ...App
});
