import express from 'express';
import { auth } from '../middleware/auth.middleware';
import {
  getTasks,
  getTask,
  updateTask,
  createTask
} from '../controllers/task.controllers';

const router = express.Router({ mergeParams: true });

router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.get('/:taskId', auth, getTask);
router.put('/:taskId', auth, updateTask);

export default router;
