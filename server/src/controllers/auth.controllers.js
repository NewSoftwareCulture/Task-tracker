import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import UserModel from '../models/UserModel';
import tokenService from '../services/token.service';
import { generateUserData } from '../utils';

export const signIn = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw Error('Invalid format');

    const { email, password: passwordByClient } = req.body;

    const user = await UserModel.findOne({ email }).select('password').lean();
    if (!user) throw Error('Not Found');

    const { _id: userId, password: passwordByDb } = user;
    const isPasswordEqual = await bcrypt.compare(
      passwordByClient,
      passwordByDb
    );

    if (!isPasswordEqual) throw Error('Invalid format');

    const tokens = await tokenService.create(userId);
    return res.status(200).json(tokens);
  } catch (error) {
    return next(error);
  }
};

export const signUp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw Error('Invalid format');

    const { name, email, password: passwordByClient } = req.body;
    const user = await UserModel.findOne({ email }).select('_id').lean();

    if (user) throw Error('Already exists');

    const hashedPassword = await bcrypt.hash(passwordByClient, 12);
    const { _id: userId } = await UserModel.create({
      ...generateUserData(),
      name,
      email,
      password: hashedPassword
    });

    const tokens = await tokenService.create(userId);
    return res.status(201).json(tokens);
  } catch (error) {
    return next(error);
  }
};

export const getToken = async (req, res, next) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);

    const dbToken = await tokenService.findOne(refreshToken);

    if (tokenService.isTokenInvalid({ data, dbToken }))
      throw Error('Unauthorized');

    const userId = dbToken.user.toString();
    const tokens = await tokenService.create(userId);
    return res.status(200).json(tokens);
  } catch (error) {
    return next(error);
  }
};

export default {
  signIn,
  signUp,
  getToken
};
