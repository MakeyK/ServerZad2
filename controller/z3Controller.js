const ToDo = require('../model/model')
class z3Controller
{
    async create(req, res)
    {
        const {id, title, description, isDone} = req.body
        const type = await ToDo.create({id, title, description, isDone})
        return res.json(type)
    }
}

module.exports= new z3Controller()