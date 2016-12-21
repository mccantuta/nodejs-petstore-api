const db = require('../config/db');

function getProduct(queryParameters) {
    var query = "select * from product ";
    
    if (queryParameters.orderBy) {
        query += "order by ${orderBy~} ";
    }
    if (queryParameters.limit) {
        query += "limit ${limit} ";
    }
    if (queryParameters.offset) {
        query += "offset ${offset} ";
    }
    return db.any(query, queryParameters);
}

module.exports = {
    getProduct: getProduct
}