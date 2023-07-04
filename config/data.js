import mongoose from 'mongoose'
export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbname: 'Project1' })
    .then(() => {
      console.log('Connected To db')
    })
    .catch((error) => {
      console.log(error)
    })
}
