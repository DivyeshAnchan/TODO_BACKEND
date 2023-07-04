import { connectdb } from './config/data.js'
import { app } from './index.js'

connectdb()
app.listen(process.env.PORT, () => {
  console.log(`listening to the server on ${process.env.PORT}`)
})
