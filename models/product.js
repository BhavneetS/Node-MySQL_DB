/* 
    re-writing the file with Sequelize
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

/* 
    Sequelize allows you to define object models that represent tables in your database.
    The define method takes 2 arguments. The first is the name of the table and the second is an object that defines the columns of the table.
    The object keys are the column names and the values are the column definitions.
    The column definitions are objects that define the data type, whether the column is nullable, and whether the column is a primary key.
*/

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); 

module.exports = Product;