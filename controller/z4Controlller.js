const { Sequelize } = require('../database')
const {QueryTypes} = require('sequelize')
const sequelize = require('../database')
const ToDo = require('../model/model')


class z4Controller
{
    async update_todo(req, res)
    {
        const data = req.body
        const {id} = req.params
        if(!id) return res.json({messenge: "Вы не ввели какой ID нужно редактировать!"})
        if(!data.id)
        {
            const update_rows = await sequelize.query(`
        UPDATE "ToDos" SET title='${data.title}', description='${data.description}', "isDone"=${data.isDone} WHERE id=${id}
        `)
        }
        if(!data.title)
        {
            const update_rows = await sequelize.query(`
        UPDATE "ToDos" SET id='${data.id}', description='${data.description}', "isDone"=${data.isDone} WHERE id=${id}
        `)
        }
        if(!data.description)
        {
            const update_rows = await sequelize.query(`
        UPDATE "ToDos" SET id='${data.id}', title='${data.title}', "isDone"=${data.isDone} WHERE id=${id}
        `)
        }
        if(!data.isDone)
        {
            const update_rows = await sequelize.query(`
        UPDATE "ToDos" SET id='${data.id}', title='${data.title}', description='${data.description}' WHERE id=${id}
        `)
        }
        if(data.id!==undefined&&data.title!==undefined&&data.description!==undefined&&data.isDone!==undefined)
        {
            const update_rows = await sequelize.query(`
        UPDATE "ToDos" SET id='${data.id}', title='${data.title}', description='${data.description}', "isDone"=${data.isDone} WHERE id=${id}
        `)
        }
        return res.json(update_rows)
    }
    
}

module.exports= new z4Controller()