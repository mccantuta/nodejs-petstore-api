const routes = require('express').Router();
const categoryRoute = require('./categoryRoute');
const homeRoute = require('./homeRoute');

routes.use('/category', categoryRoute);
routes.use('/', homeRoute);

module.exports = routes;
