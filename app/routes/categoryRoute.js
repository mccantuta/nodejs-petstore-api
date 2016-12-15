const routes = require('express').Router();
const categoryService = require('../services/categoryService');

routes.get('/', (req, res, next) => {
    var queryParameters = {
        orderBy: req.query.orderBy,
        limit: req.query.limit,
        offset: req.query.offset
    }
    categoryService.getCategory(queryParameters)
      .then( (data) => {
          res.json(data);
          })
      .catch( (error) => {
          console.log('error ', error);
      });
    ;
});

module.exports = routes;