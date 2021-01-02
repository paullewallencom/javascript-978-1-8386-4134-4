const User = require("../models/user");

module.exports = class UserService {
    findAll() {
        return User.find({});
    }

    async findAllWithAddress() {
        let users = await this.findAll();
        return users.map(user => {
            user = user.toJSON();
            let address = user.address;
            delete user.address;
            user.address = `${address.street}, ${address.city} ${address.zipCode}`;
            return user;
        });
    }

    findOneByName(name) {
        return User.findOne({name});
    }

    create(user) {
        return User.create(user);
    }

    delete(id) {
        return User.deleteOne({_id: id});
    }
}