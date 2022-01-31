import express from 'express';
import api from './api.routes';

const router = express.Router({ mergeParams: true });

router.use('/api', api);
router.use('/user', api);
router.use('/task', api);
router.get(/.*/, (req, res) => res.send(req.path));

export default router;
