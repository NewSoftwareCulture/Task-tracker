import express from 'express';
import path from 'path';
import api from './api.routes';

const router = express.Router({ mergeParams: true });

router.use('/api', api);

if (process.env.NODE_ENV === 'production') {
  router.use(
    '/',
    express.static(path.join(__dirname, '..', '..', '..', 'client', 'build'))
  );

  const indexPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'client',
    'build',
    'index.html'
  );
  router.get('*', (req, res) => res.sendFile(indexPath));
}

export default router;
