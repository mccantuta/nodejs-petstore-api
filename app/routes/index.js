const routes = require('express').Router();
const categoryRoute = require('./categoryRoute');
const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');

routes.use('/categories', categoryRoute);
routes.use('/products', productRoute);
routes.use('/', homeRoute);

module.exports = routes;
