const { Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100000 // Starting balance of ₹1,00,000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = { UserSchema };

module.exports = { UserSchema };