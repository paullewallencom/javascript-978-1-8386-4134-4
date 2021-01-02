export class UsersService {
    constructor() {
        this.users = [{
            id: 1,
            name: "Test User1",
            username: "testuser1",
            email: "testuser1@gmail.com"
        }];
    }

    findAll() {
        return Promise.resolve(this.users);
    }

    create(user) {
        if (this.users.find(u => u.email == user.email)) {
            return Promise.reject("User already exists");
        }
        this.users.push(user);
        return Promise.resolve(user);
    }

    delete(id) {
        let user = this.users.find(u =>u.id == id);
        if (user) {
            this.users = this.users.filter(u => u.id != id);
            return Promise.resolve(user);
        }
        else {
            return null;
        }
    }
}