const Router = require('express')
const routes = new Router()
const z3Controller = require('../controller/z3Controller')
//const authMiddleware = require('../authMiddleware')

routes.post('/create', z3Controller.create)
routes.post('/create1', z3Controller.create1)

module.exports=routes