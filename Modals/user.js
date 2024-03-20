const Sequelize = require('sequelize');
const sequelize = require('../Utilities/database')

const users = sequelize.define('users',{
  
    id:{
        
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        notNull: true
    },
    name: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    
     


})

module.exports = users;