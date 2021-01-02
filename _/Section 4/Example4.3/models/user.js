const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false,
            unique: true
        },
        address: {
            street: {
                type: String,
                required: false
            },
            suite: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: false
            },
            zipcode: {
                type: String,
                required: false
            },
            geo: {
                lat: {
                    type: String,
                    required: false
                },
                lng: {
                    type: String,
                    required: false
                }
            }
        },
        phone: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        },
        company: {
            name: {
                type: String,
                required: false
            },
            catchPhrase: {
                type: String,
                required: false
            },
            bs: {
                type: String,
                required: false
            }
        }
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
