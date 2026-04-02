const {Schema, model} = require('mongoose');

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
});

module.exports = model("Holding", HoldingSchema);