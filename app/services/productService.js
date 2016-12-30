const db = require('../config/db');

function getProduct(queryParameters) {
    var query = "select p.id, " +
        "c.id as categoryId, " +
        "c.name as categoryName, " +
        "p.name, " +
        "p.description " +
        "from product p inner join category c on p.category_id = c.id ";
    
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