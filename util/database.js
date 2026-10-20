//  --------------- Block Without Sequelize ----------------

// const mysql = require('mysql2');


// /* 
//     There are 2 ways to connect to the DB. Either create a single connection, close after every query and re-create it for new query.
//     However this quickly becomes inefficient.
//     Or create a connection pool as below.
// */
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Node_Udemy'
// });

// module.exports = pool.promise();


//   ------------------ Block with Sequelize ------------

/* 
    Sequelize requires mysql2 package to be insatlled
*/

/* 
    1. Create a model.
    2. Connect it to DB
    
*/

    const Sequelize = require('sequelize');

    const sequelize = new Sequelize('node-complete', 'root', 'Node_Udemy', {
        dialect: 'mysql',
        host: 'localhost'
    });

    module.exports = sequelize;
