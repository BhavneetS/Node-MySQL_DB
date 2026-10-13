const mysql = require('mysql2');


/* 
    There are 2 ways to connect to the DB. Either create a single connection, close after every query and re-create it for new query.
    However this quickly becomes inefficient.
    Or create a connection pool as below.
*/
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'nodecomplete'
});

module.exports = pool.promise();