const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.render('index', {'title': 'Pet Store API'});
});

module.exports = routes;