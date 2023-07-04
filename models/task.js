import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  IsComplete: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserData',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export const model2 = new mongoose.model('Task', schema)
