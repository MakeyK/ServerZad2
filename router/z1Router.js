const Router = require('express')
const z1Controller = require('../controller/z1Controller')
const routes = new Router()
const checkRoleMiddleware = require('../checkRoleWare')
const authMiddleware = require('../authMiddleware')

routes.get('/getall',checkRoleMiddleware('Admin'), z1Controller.getAll)
routes.get('/getid', authMiddleware, z1Controller.getID)

module.exports=routes