import mongoose from 'mongoose'
export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbname: 'Project1' })
    .then((c) => {
      console.log(`Connected To db ${c.connection.host}`)
    })
    .catch((error) => {
      console.log(error)
    })
}
