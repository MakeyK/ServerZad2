const express = require('express')
require('dotenv').config()
const router = require('./router/index')
const {QueryTypes} = require('sequelize')
const sequelize = require('./database')
const CryptoJS = require('crypto-js')

const PORT = 3000
const app = express()
const cors = require('cors')
const router1 = require('./router1/index')

app.use(cors())
app.use(express.json())

app.use('/mak', router)
app.use('/mak1', router1)
app.get('/test', async(req,res) =>
{
    const get_all = await sequelize.query(`SELECT * FROM "statements"`)
    res.status(200).json(get_all)
}
)

const start = async () =>
{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}

start()