import React from 'react';

const path = `${process.env.PUBLIC_URL}/main.png`;

export function ImageMain() {
  return <img className="img-fluid" src={path} alt="main" />;
}

export default ImageMain;
