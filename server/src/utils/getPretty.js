import chalk from 'chalk';
import get from 'lodash/get';
import { getDate } from './getDate';

const methodColors = {
  GET: 'green',
  POST: 'blue',
  PUT: 'yellow',
  PATCH: 'yellow',
  DELETE: 'red',
  REMOVE: 'red',
  default: 'gray'
};

const statusColors = {
  trace: 'gray',
  debug: 'white',
  info: 'green',
  warn: 'yellow',
  error: 'red',
  fatal: 'red',
  default: 'gray'
};

export const getPrettyData = (data = {}) => chalk.white(JSON.stringify(data));

export const getPrettyMethod = (method) => {
  const color = methodColors[method] || methodColors.default;
  return chalk[color](`${method}`);
};

export const getPrettyTime = () => chalk.gray(getDate().time);

export const getPrettyUrl = (url) => chalk.white(url);

export const getPrettyStatus = (status) => {
  const color = statusColors[status] || statusColors.default;
  const char = get(status, '[0]', '_');
  return chalk[color](`[${char}]`);
};

export const getPrettyError = ({ code, stack }) =>
  chalk.red(`Code: ${code}\n${stack.toString()}`);

export default {
  getPrettyData,
  getPrettyMethod,
  getPrettyTime,
  getPrettyUrl
};
