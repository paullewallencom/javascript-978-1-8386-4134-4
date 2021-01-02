const _ = require("lodash");

module.exports = class UserService {
    constructor() {
        this.users = [];
    }
    
    findAll() {
        return Promise.resolve(_.cloneDeep(this.users));
    }

    findOneByName(name) {
        return Promise.resolve({...this.users.find(u => u.name == name)});
    }

    create(user) {
        this.users.push({
            ...user
        });
        return Promise.resolve(user);
    }

    delete(id) {
        let user = this.users.find(u => u.id == id);
        if (user) {
            this.users = this.users.filter(u => u.id != id);
            return Promise.resolve(user);
        }
        else {
            return Promise.resolve(null);
        }
    }
}