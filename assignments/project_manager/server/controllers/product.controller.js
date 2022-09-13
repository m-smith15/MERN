const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "You've pinged the index!"
    });
}

module.exports.createProduct = (request, response) => {
    const { productTitle, price, description } = request.body;
    Product.create({
        productTitle,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}