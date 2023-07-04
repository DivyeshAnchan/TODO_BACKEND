import Express from 'express'
import {
  getAllUser,
  getMe,
  loginUser,
  logoutin,
  register,
} from '../controllers/usercontroller.js'
import { authen } from '../middleware/auth.js'
const router = Express.Router()
router.get('/all', getAllUser)

router.post('/register', register)
router.post('/login', loginUser)
router.get('/me', authen, getMe)
router.get('/logout', logoutin)

export default router
