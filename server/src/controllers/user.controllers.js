import bcrypt from 'bcryptjs';
import { UserModel } from '../models';

export const getUser = async (req, res, next) => {
  const { userId } = req.params;
  const { _id } = req.user;

  try {
    if (userId !== _id) throw Error('Forbidden');

    const user = await UserModel.findById(userId).lean();

    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find().lean();
    return res.json(users);
  } catch (error) {
    return next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email, password: passwordByClient } = req.body;
  const { userId } = req.params;
  const { _id } = req.user;

  try {
    if (userId !== _id) throw Error('Forbidden');
    const hashedPassword = await bcrypt.hash(passwordByClient, 12);

    const user = await UserModel.findByIdAndUpdate(
      userId,
      { name, email, password: hashedPassword },
      { new: true }
    ).lean();

    return res.json(user);
  } catch (error) {
    return next(error);
  }
};
