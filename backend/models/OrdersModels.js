const {model} = require('mongoose');

const {OrderSchema} = require('../schemas/OrdersSchema');

const OrdersModel = new model("Order", OrderSchema);

module.exports = {OrdersModel};