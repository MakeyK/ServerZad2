const ApiError = require('../ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../model/model')
const { password } = require('pg/lib/defaults')

const generateJwt = (id, login, role) =>
{
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AuthController
{
    async registration(req, res, next)
    {
        const {login, password, role} = req.body
        if(!login||!password)
        {
            return next(ApiError.badRequest("Не введён логин или пароль!"))
        }
        const candidate = await User.findOne({where: {login}})
        if(candidate)
        {
            return next(ApiError.badRequest("Пользователь с таким логином уже создан! Попробуйте другой"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, password: hashPassword, role})
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }


    async login(req, res, next)
    {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if(!user)
        {
            return next(ApiError.badRequest("Пользователь не найден!"))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword)
        {
            return next(ApiError.badRequest("Введен неверный пароль!"))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }
}


module.exports=new AuthController()