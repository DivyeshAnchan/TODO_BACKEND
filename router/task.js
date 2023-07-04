import express from 'express'
import { deleteTask, mytask, newtask, updateTask } from '../controllers/task.js'
import { authen } from '../middleware/auth.js'
const router = express.Router()
router.post('/new', authen, newtask)
router.get('/my', authen, mytask)
router.route('/:id').put(authen, updateTask).delete(authen, deleteTask)
export default router
