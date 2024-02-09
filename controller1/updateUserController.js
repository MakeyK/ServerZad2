const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const {User} = require('../model/model')
const bcrypt = require('bcrypt')

function check_login(id_user, login)
    {
        if(login) return `UPDATE users SET fio='${fio}' WHERE login=${login}`
        else return undefined
    }

class updateUserController
{
    async update_user(req, res)
    {
        const {login} = req.query
        if(!login) return res.json({messenge: "Вы не ввели какой login нужно редактировать!"})
        const data = req.body
        let query_login=check_login(fio, data.login)
        if(query_login)
        {
            await sequelize.query(query_login)
        }
        if(data.password)
        {
            const hashPassword = await bcrypt.hash(data.password, 5)
            await sequelize.query(`UPDATE users SET password='${hashPassword}' WHERE login=${login}`)
        }
        res.json({messege: "Данные изменены"})
    }
}

module.exports= new updateUserController()