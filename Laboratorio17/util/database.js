const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'fans',
    password: 'M.j.15102004'
});

module.exports = pool.promise();
