import React from 'react';
import { FormWrapper } from '../components/common/FormWrapper';
import { TaskForm } from '../components/ui/TaskForm';
import { createTask } from '../store/tasks';

export function taskCreatePage() {
  return (
    <FormWrapper>
      <h1 className="text-center m-3">Новая задача</h1>
      <TaskForm storeFunc={createTask} />
    </FormWrapper>
  );
}

export default taskCreatePage;
