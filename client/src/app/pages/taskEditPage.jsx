/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FormWrapper } from '../components/common/FormWrapper';
import { TaskForm } from '../components/ui/TaskForm';
import { getTask, updateTask } from '../store/tasks';

export function taskEditPage() {
  const { taskId } = useParams();
  const data = useSelector(getTask(taskId));
  return (
    <FormWrapper>
      <h1 className="text-center m-3">Редактировать</h1>
      <TaskForm {...data} storeFunc={updateTask} />
    </FormWrapper>
  );
}

export default taskEditPage;
