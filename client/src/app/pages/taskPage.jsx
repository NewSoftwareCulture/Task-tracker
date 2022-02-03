import React from 'react';
import { PageWrapper } from '../components/common/PageWrapper';

export const taskPage = () => {
  console.log('');
  return (
    <PageWrapper>
      <h1>taskPage</h1>
      <h2>.</h2>
      <p className="m-2">Hello world!</p>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => {
          console.log('Click!!!!!!!!!!!!!!!!!!');
          // history.push('/');
        }}
      >
        Click!
      </button>
    </PageWrapper>
  );
};

export default taskPage;
