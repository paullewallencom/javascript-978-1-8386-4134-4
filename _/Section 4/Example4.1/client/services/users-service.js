import Axios from "axios";

export class UsersService {
    constructor() {
        this.baseUrl = "http://localhost:3000";
    }

    findAll() {
        return Axios({
            url: `${this.baseUrl}/api/users`
        }).then(response => response.data);
    }    

    create(user) {
        return Axios({
            method: 'POST',
            url: `${this.baseUrl}/api/users`,
            data: user
        }).then(response => response.data);
    }

    delete(id) {
        return Axios({
            method: 'DELETE',
            url: `${this.baseUrl}/api/users/${id}`
        }).then(response => response.data);
    }
}