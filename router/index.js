const Router = require('express')
const router = new Router()
const z3Router = require('./z3Router')
const z1Router=require('./z1Router')
const z4Router=require('./z4Router')
const z5Router=require('./z5Router')
const z6Router=require('./z6Router')

router.use('/rout', z3Router, z1Router, z4Router, z5Router, z6Router)

module.exports=router