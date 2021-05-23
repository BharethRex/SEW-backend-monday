var mysql = require("mysql");

var dbConnect = {};

dbConnect.getConnection = function() {
    var conn = mysql.createConnection(
        {
            host: "remotemysql.com",
            user: "mNyDF0sDUp",
            password: "7DmGKyNdaL",
            database: "mNyDF0sDUp"
        }
    );
    return conn;
}

module.exports = dbConnect;
