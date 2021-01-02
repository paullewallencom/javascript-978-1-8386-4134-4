const mongoose = require("mongoose");

// Do not delete these lines
const User = require("./user");

mongoose.Promise = global.Promise;  //A+ Promise
//MongoDB connection URI-->  mongodb://username:password@hostname:port/database
const connectionString = `mongodb://root:123456789@localhost:27017/users`;

module.exports = function() {
    console.log(`Connecting to ${connectionString}`);
    return new Promise((resolve, reject) => {
        mongoose.connection.on("open", () => {
            resolve(mongoose);
        });

        mongoose.connection.on("error", err => {
            reject(err);
        });

        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            authSource: "admin"
        });
    });
}
