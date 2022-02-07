import React from 'react';
import { getRandomInt } from '../../../utils';

const imgNumber = getRandomInt(1, 32);
const path = `https://error404.fun/img/full-preview/2x/${imgNumber}.png`;

export function Image404() {
  return <img className="img-fluid" src={path} alt="404" />;
}

export default Image404;
