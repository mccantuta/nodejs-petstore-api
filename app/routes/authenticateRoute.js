const routes = require('express').Router();
const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

routes.post('/', (req, res, next) => {
    userService.validateUser(req.body.user, req.body.password)
      .then( (data) => {
          if (! data) {
              res.json({success: false});
          }
          else {
              let token = jwt.sign({
                    user: data.login, 
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email}, 
                    'mccl', 
                    {expiresIn: 200});
              res.json({
                success: true,
                token:token});
          }
        })
      .catch( (error) => {
          console.log('error ', error);
      });
    ;
});

module.exports = routes;