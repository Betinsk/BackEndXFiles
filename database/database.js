const { Sequelize } = require('sequelize');

const Connection = new Sequelize('xfiles', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });


module.exports = Connection