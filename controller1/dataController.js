const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')
class dataController
{
    async getAll_user(req, res)
    {
        const data = await User.findAll()
        return res.json(data)
    }
    async getID_user(req, res)
    {
        const {login} = req.params
        const get_login = await User.findOne({where: {login}})
        return res.json(get_login)
    }
}

module.exports = new dataController()