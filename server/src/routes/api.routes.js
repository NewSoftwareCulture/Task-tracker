import express from 'express';
import auth from './auth.routes';
import user from './user.routes';
import task from './task.routes';

const router = express.Router({ mergeParams: true });

router.use('/auth', auth);
router.use('/user', user);
router.use('/task', task);

export default router;
