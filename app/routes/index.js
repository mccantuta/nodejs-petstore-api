const routes = require('express').Router();
const jwt = require('jsonwebtoken');

const categoryRoute = require('./categoryRoute');
const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');
const authenticateRoute = require('./authenticateRoute');

routes.use('/authenticate', authenticateRoute);
routes.use('/', homeRoute);

//Route middleware to authenticate and check token
routes.use(function (req, res, next) {
    var token = req.body.token || req.params.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'mccl', function(err, decoded) {
            if(err) {
                console.log('TOKEN VALIDATION ERROR', err);
                return res.json({success: false, message: 'Failed to authenticate token'});                
            }
            else {
                req.decoded = decoded;
                next();
            }
        })
    }
    else {
        return res.status(403).send({
            success: false,
            message: 'No token provided'
        });
    }
});

routes.use('/categories', categoryRoute);

//Aca agrego un comentario
routes.use('/products', productRoute);

module.exports = routes;