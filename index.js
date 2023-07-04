import Express from 'express'
import { config } from 'dotenv'
import userroute from './router/routers.js'
import taskroute from './router/task.js'
export const app = Express()
import cookie from 'cookie-parser'
import { errorhandler } from './middleware/errorhandling.js'
import cors from 'cors'

//middlewares
app.use(Express.json())
app.use(cookie())
config({
  path: './config/config.env',
})
app.use('/api/v1/users', userroute)
app.use('/api/v1/task', taskroute)
app.use(errorhandler)
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
    credentials: true,
  })
)
