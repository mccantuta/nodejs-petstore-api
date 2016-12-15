const db = require('../config/db');

function getCategory(queryParameters) {
    var query = "select * from category ";
    
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
    getCategory: getCategory
}