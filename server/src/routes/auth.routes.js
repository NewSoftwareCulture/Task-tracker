import express from 'express';
import { check } from 'express-validator';
import { signUp, signIn, getToken } from '../controllers/auth.controllers';

const router = express.Router({ mergeParams: true });

const checkValidations = [
  check('email', 'Некорректный email').isEmail(),
  check('email', 'Некорректный email').normalizeEmail().isEmail(),
  check('password', 'Пароль не может быть пустым').exists(),
  check('password', 'Минимальная длина пароля 8 символов').isLength({ min: 8 })
];

router.post('/signUp', [...checkValidations, signUp]);
router.post('/signIn', [...checkValidations, signIn]);
router.post('/token', getToken);

export default router;
