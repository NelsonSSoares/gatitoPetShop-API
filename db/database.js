const Sequelize = require('sequelize');
const config = require('config');


const instancia = new Sequelize(

    config.get('mysql.catpetshop'),
    config.get('mysql.user'),
    config.get('mysql.password'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
);

module.exports = instancia; 