import {
  getPrettyData,
  getPrettyMethod,
  getPrettyTime,
  getPrettyUrl,
  getPrettyStatus
} from '../utils';

export const log = (req, res, next) => {
  const { url, method, data } = req;
  const prettyData = getPrettyData(data);
  const prettyMethod = getPrettyMethod(method);
  const prettyTime = getPrettyTime();
  const prettyUrl = getPrettyUrl(url);
  const prettyStatus = getPrettyStatus('info');

  const message = `${prettyStatus} ${prettyMethod} ${prettyTime} ${prettyUrl}\t\t\t${prettyData}`;

  console.log(message);

  return next();
};

export default log;
