const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productTitle: {type: String},
    price: {type: Number},
    description: {type: String}
}, { timestamps: true } );
//setup the schema w/ mongoose, also set some basic validations
module.exports.Product = mongoose.model('Product', ProductSchema);
//dont forget to export