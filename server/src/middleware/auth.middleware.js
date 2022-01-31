import get from 'lodash/get';
import tokenService from '../services/token.service';

export const auth = (req, res, next) => {
  if (req.method === 'OPTIONS') return next();

  try {
    const [, token] = get(req, 'headers.authorization', '').split(' ');

    if (!token) throw Error('Unauthorized');

    const data = tokenService.validateAccess(token);

    if (!data) throw Error('Unauthorized');

    req.user = data;
    return next();
  } catch (error) {
    return next(error);
  }
};

export default auth;
