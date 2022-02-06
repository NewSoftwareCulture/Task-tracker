import React from 'react';
import { PageWrapper } from '../components/common/PageWrapper';
import { TasksBoard } from '../components/ui/TasksBoard';

export const taskBoardPage = () => (
  <PageWrapper>
    <TasksBoard />
  </PageWrapper>
);

export default taskBoardPage;
