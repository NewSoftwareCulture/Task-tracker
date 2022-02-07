import React from 'react';
import { PageWrapper } from '../components/common/PageWrapper';
import { Image404 } from '../components/ui/Image404';

export const notFoundPage = () => (
  <PageWrapper>
    <h1 className="text-center">404</h1>
    <Image404 />
  </PageWrapper>
);

export default notFoundPage;
