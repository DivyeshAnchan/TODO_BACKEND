import { model1 } from '../models/userdata.js'
import bcrypt from 'bcrypt'
import { setttoken } from '../utils/token.js'
import ErrorHandle from '../middleware/errorhandling.js'

export const getAllUser = async (req, res) => {
  const users = await model1.find({})
  res.json({
    sucess: true,
    users,
  })
}
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    let user = await model1.findOne({ email })
    if (user) return next(new ErrorHandle('User Exists', 400))
    const hashed = await bcrypt.hash(password, 10)
    user = await model1.create({
      name,
      email,
      password: hashed,
    })
    setttoken(user, res, 'Created Successfully', 201)
  } catch (error) {
    next(error)
  }
}
export const loginUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const user = await model1.findOne({ email }).select('+password')
    if (!user) return next(new ErrorHandle('User Doesnt Exist', 400))

    const ispasswords = await bcrypt.compare(password, user.password)
    if (!ispasswords)
      return res.status(404).json({
        message: 'User or Password Doesnt match',
      })
    setttoken(user, res, `welcome ${name}`, 200)
  } catch (error) {
    next(error)
  }
}
export const getMe = (req, res) => {
  res.status(200).json({ success: true, user: req.user })
}
export const logoutin = (req, res) => {
  res
    .cookie('token', null, {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_VAR === 'Development' ? 'lax' : 'none',
      secure: process.env.NODE_VAR === 'Development' ? false : true,
    })
    .json({ success: true, user: req.user })
}
