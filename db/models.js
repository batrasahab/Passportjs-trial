const sequelize = require('sequelize')
const datatypes = sequelize.DataTypes

const db = new sequelize('passportdb','ppuser','ABCabc123!@#',{
    dialect: 'mysql'
})

const user= db.define('users', {
    id: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: datatypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: datatypes.STRING,
        allowNull: false
    }
})

db.sync().then(() => console.log('DataBase Created'))

exports = module.exports = {
    db,
    user
}