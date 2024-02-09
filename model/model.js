const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const Statement = sequelize.define('statement',{
    id_violitation: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    number_auto: {type: DataTypes.INTEGER, unique:true},
    status: {type: DataTypes.STRING}
})

const User = sequelize.define('users', {
    login: {type: DataTypes.STRING,primaryKey: true},
    password: {type: DataTypes.STRING, allowNull: true},
    fio: {type: DataTypes.STRING, allowNull: true},
    phone: {type: DataTypes.INTEGER, unique:true},
    adres_email: {type: DataTypes.TEXT, unique:true},
    role: {type: DataTypes.STRING, defaultValue: "user"}
})

User.hasMany(Statement)
Statement.belongsTo(User)

module.exports = {
    User,
    Statement
}