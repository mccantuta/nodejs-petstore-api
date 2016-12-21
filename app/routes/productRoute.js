const routes = require('express').Router();
const productService = require('../services/productService');

routes.get('/', (req, res, next) => {
    var queryParameters = {
        orderBy: req.query.orderBy,
        limit: req.query.limit,
        offset: req.query.offset
    }
    productService.getProduct(queryParameters)
      .then( (data) => {
          console.log('ESTO ES ', data);
          res.json(data);
          })
      .catch( (error) => {
          console.log('error ', error);
      });
    ;
});

module.exports = routes;