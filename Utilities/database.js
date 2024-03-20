const Sequelize = require('sequelize');

const  sequelize = new Sequelize( 'cricket_fantacy', 'root', 'password',{
      dialect:'mysql',
      host: 'localhost'
})

module.exports = sequelize;
