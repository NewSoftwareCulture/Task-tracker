import {
  getPrettyMethod,
  getPrettyTime,
  getPrettyUrl,
  getPrettyStatus,
  getPrettyError
} from '../utils';

const errCode = {
  'Bad Request': 400,
  'Invalid format': 400,
  Unauthorized: 401,
  'Payment Required': 402,
  Forbidden: 403,
  'Not Found': 404,
  'Method Not Allowed': 405,
  'Not Acceptable': 406,
  'Proxy Authentication Required': 407,
  'Request Timeout': 408,
  Conflict: 409,
  'Already exists': 409,
  Gone: 410,
  'Length Required': 411,
  'Precondition Failed': 412,
  'Request Entity Too Large': 413,
  'Request-URI Too Long': 414,
  'Unsupported Media Type': 415,
  'Requested Range Not Satisfiable': 416,
  'Expectation Failed': 417,
  'Internal Server Error': 500,
  'Not Implemented': 501,
  'Bad Gateway': 502,
  'Service Unavailable': 503,
  'Gateway Timeout': 504,
  'HTTP Version Not Supported': 505
};

export const error = (err, req, res, next) => {
  const { url, method } = req;
  const prettyMethod = getPrettyMethod(method);
  const prettyTime = getPrettyTime();
  const prettyUrl = getPrettyUrl(url);
  const prettyStatus = getPrettyStatus('error');
  const data = getPrettyError(err);

  const message = `${prettyStatus} ${prettyMethod} ${prettyTime} ${prettyUrl}\n${data}`;
  console.error(message);

  const code = errCode[err.message] || errCode['Internal Server Error'];
  return res.status(code).send(err.message);
};

export default error;
