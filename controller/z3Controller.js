const {Statement} = require('../model/model')
const {User} = require('../model/model')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
class z3Controller
{
    async create(req, res)
    {
        const {login, password, fio, phone, adres_email, role} = req.body
        const type = await User.create({login, password, fio, phone, adres_email, role})
        return res.json(type)
    }
    async create1(req,res)
    {
        const {id_violitation, number_auto, status} = req.body
        const type1 = await Statement.create({id_violitation, number_auto, status})
        return res.json(type1)
    }
}

module.exports= new z3Controller()