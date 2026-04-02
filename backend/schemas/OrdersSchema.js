const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = {OrderSchema};