var options = {
    //initialization
}
var pgp = require('pg-promise')(options);
var cn = {
    host: '192.168.1.49',
    port: 5432,
    database: 'petstore',
    user: 'petstore',
    password: 'petstore'
};
var db = pgp(cn);

module.exports = db;