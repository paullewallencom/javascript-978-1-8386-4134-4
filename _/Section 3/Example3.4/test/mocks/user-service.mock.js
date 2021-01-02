const _ = require("lodash");

module.exports = class UserService {
    constructor() {
        this.users = [];
    }
    
    findAll() {
        return _.cloneDeep(this.users);
    }

    findOneByName(name) {
        return {...this.users.find(u => u.name == name)};
    }

    create(user) {
        this.users.push({
            ...user
        });
    }

    delete(id) {
        let user = this.users.find(u => u.id == id);
        if (user) {
            this.users = this.users.filter(u => u.id != id);
            return user;
        }
        else {
            return null;
        }
    }
}