const db = require('../config/db');

function validateUser(user, password) {
    var query = "select * from customer where login = ${login} and password = ${password} ";
    
    return db.oneOrNone(query, 
        {login: user, password: password});
}

module.exports = {
    validateUser: validateUser
}