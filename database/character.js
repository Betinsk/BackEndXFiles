const { Sequelize, DataTypes } = require('sequelize');
const connection = require('./database')

const Character =  connection.define('characters', {
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull:false
    },

    picture: {
        type: DataTypes.BLOB,
        allowNull:true
    }
})

    Character.sync({force: false}).then(()=> {
        console.log('Table created')
    })

    module.exports = Character

