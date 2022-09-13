const ProductController = require('../controllers/product.controller');

//building out routes to be used

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
}