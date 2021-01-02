const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            suite: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            zipcode: {
                type: String,
                required: true
            },
            geo: {
                lat: {
                    type: String,
                    required: true
                },
                lng: {
                    type: String,
                    required: true
                }
            }
        },
        phone: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        company: {
            name: {
                type: String,
                required: true
            },
            catchPhrase: {
                type: String,
                required: true
            },
            bs: {
                type: String,
                required: true
            }
        }
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
