import { model1 } from '../models/userdata.js'
import Jwt from 'jsonwebtoken'

export const authen = async (req, res, next) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(404).json({ sucess: false, message: 'login first' })
  }
  const decoded = Jwt.verify(token, process.env.JWT_SEC)
  req.user = await model1.findById(decoded._id)
  next()
}
