import { TaskModel } from '../models';

export const getTasks = async (req, res, next) => {
  const { _id: userId } = req.user;
  try {
    const tasks = await TaskModel.find({ userId }).lean();
    return res.json(tasks);
  } catch (error) {
    return next(error);
  }
};

export const getTask = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { taskId } = req.params;

  try {
    const task = await TaskModel.findOne(taskId).lean();

    if (task.userId !== userId) throw Error('Forbidden');

    return res.json(task);
  } catch (error) {
    return next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { title, status, accountable, deadline, description } = req.body;
  const { taskId } = req.params;

  try {
    const task = await TaskModel.findOneAndUpdate(
      { _id: taskId, userId },
      { title, status, accountable, deadline, description },
      { new: true }
    ).lean();

    return res.json(task);
  } catch (error) {
    return next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { taskId } = req.params;

  try {
    const task = await TaskModel.findOneAndDelete({ _id: taskId, userId });

    return res.json(task);
  } catch (error) {
    return next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { title, status, accountable, deadline, description } = req.body;
  try {
    const task = new TaskModel({
      userId,
      title,
      status,
      accountable,
      deadline,
      description
    });
    await task.save();
    return res.status(201).json(task);
  } catch (error) {
    return next(error);
  }
};

export default {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask
};
