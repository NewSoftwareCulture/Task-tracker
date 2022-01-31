import express from 'express';
import { auth } from '../middleware';
import { getUser, getUsers, updateUser } from '../controllers/user.controllers';

const router = express.Router({ mergeParams: true });

router.get('/', auth, getUsers);

router.get('/:userId', auth, getUser);

router.put('/:userId', auth, updateUser);

export default router;
