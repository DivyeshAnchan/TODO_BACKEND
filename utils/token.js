import Jwt from 'jsonwebtoken'

export const setttoken = (user, res, message, statuscode) => {
  const token = Jwt.sign({ _id: user._id }, process.env.JWT_SEC)
  res
    .status(statuscode)
    .cookie('token', token, {
      maxAge: 15 * 60 * 1000,
      httpOnly: true,
      sameSite: process.env.NODE_VAR === 'Development' ? 'lax' : 'none',
      secure: process.env.NODE_VAR === 'Development' ? false : true,
    })
    .json({
      sucess: true,
      message,
    })
}
