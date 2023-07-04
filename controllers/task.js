import ErrorHandle from '../middleware/errorhandling.js'
import { model2 } from '../models/task.js'
//create
export const newtask = async (req, res, next) => {
  try {
    const { title, description } = req.body
    await model2.create({
      title,
      description,
      user: req.user,
    })
    res.status(201).json({
      sucess: true,
      message: 'Task Added Successfully',
    })
  } catch (error) {
    next(error)
  }
}
//read
export const mytask = async (req, res) => {
  try {
    const userid = req.user._id
    const task = await model2.find({ user: userid })
    res.status(200).json({
      success: true,
      task,
    })
  } catch (error) {
    next(error)
  }
}
//update
export const updateTask = async (req, res, next) => {
  try {
    const test = await model2.findById(req.params.id)
    if (!test) return next(new ErrorHandle('Task Not Found', 404))

    test.IsComplete = !test.IsComplete
    await test.save()
    res.status(200).json({
      success: true,
      message: 'updated',
    })
  } catch (error) {
    next(error)
  }
}

//delete
export const deleteTask = async (req, res, next) => {
  try {
    const test = await model2.findById(req.params.id)

    if (!test) return next(new ErrorHandle('Task Not Found', 404))
    await test.deleteOne()
    res.status(200).json({
      success: true,
      message: 'Deleted',
    })
  } catch (error) {
    next(error)
  }
}
